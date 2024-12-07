import React, { useState } from "react";
import axios from "axios";
import '../assets/styles/speechPractice.css'
const SpeechPractice = () => {
  const [generatedText, setGeneratedText] = useState("");
  const [transcription, setTranscription] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [recording, setRecording] = useState(false);

  // Speech recognition setup
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "en-US";

  const startRecording = () => {
    setRecording(true);
    setTranscription(""); // Clear previous transcription
    setFeedback(null); // Clear previous feedback

    recognition.start();
    recognition.onresult = (event) => {
      let interimTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          interimTranscript += event.results[i][0].transcript;
        }
      }
      setTranscription(interimTranscript);
    };

    recognition.onerror = (error) => {
      console.error("Speech recognition error:", error.message);
      stopRecording();
    };
  };

  const stopRecording = () => {
    setRecording(false);
    recognition.stop();
  };

  const fetchFeedback = async () => {
    if (!transcription.trim()) {
      alert("No transcription available. Please record something first.");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:8000/speech/feedback", {
        speech_text: transcription,  // Ensure this key matches the backend's expected parameter
      });
      setFeedback(response.data);
    } catch (error) {
      console.error("Error fetching feedback:", error.message);
      setFeedback({ error: "Failed to fetch feedback. Try again." });
    }
  };
  

  return (
    <div className="speech-practice-container">
      <h2>Speech Practice</h2>
      <div>
        <button onClick={recording ? stopRecording : startRecording}>
          {recording ? "Stop Recording" : "Start Recording"}
        </button>
      </div>
      <textarea
        readOnly
        value={transcription}
        placeholder="Your live transcription will appear here..."
        rows={4}
        cols={50}
      ></textarea>
      <button onClick={fetchFeedback} disabled={!transcription.trim()}>
        Get Feedback
      </button>
      {feedback && (
        <div>
          <h3>Feedback</h3>
          <p><strong>Transcription:</strong> {feedback.transcription}</p>
          <p><strong>Feedback:</strong> {feedback.grammar_feedback}</p>
        </div>
      )}
    </div>
  );
};

export default SpeechPractice;
