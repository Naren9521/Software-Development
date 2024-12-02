import React, { useState } from "react";
import axios from "axios";
import "../assets/styles/pronounciationTrainer.css";

const PronunciationTrainer = () => {
  const [level, setLevel] = useState(null);
  const [generatedText, setGeneratedText] = useState("");
  const [recording, setRecording] = useState(false);
  const [transcription, setTranscription] = useState("");

  const handleLevelSelect = (selectedLevel) => {
    setLevel(selectedLevel);
  };

  const handleGenerateText = () => {
    if (!level) {
      setGeneratedText("Please select a level before generating text.");
      return;
    }

    const texts = {
      Easy: "Hello world",
      Medium: "This is a pronunciation test",
      Hard: "Pronunciation is a tricky skill to master",
    };
    setGeneratedText(texts[level]);
  };

  const startRecording = async () => {
    try {
      await axios.post("http://localhost:8000/start-recording");
      setRecording(true);
    } catch (error) {
      console.error("Error starting recording:", error.response?.data?.message || error.message);
    }
  };

  const stopRecording = async () => {
    try {
      const response = await axios.post("http://localhost:8000/stop-recording");
      setTranscription(response.data.content);
      setRecording(false);
    } catch (error) {
      console.error("Error stopping recording:", error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="pronunciation-trainer-container">
      <textarea
        className="pronunciation-trainer-text-area"
        value={generatedText}
        readOnly
        placeholder="Enter your text to practice or generate random text by selecting a level."
      ></textarea>
      <div className="pronunciation-trainer-button-group">
        <div className="pronunciation-trainer-level-buttons">
          {["Easy", "Medium", "Hard"].map((difficulty) => (
            <button
              key={difficulty}
              className={`pronunciation-trainer-level-button ${
                level === difficulty ? "active" : ""
              }`}
              onClick={() => handleLevelSelect(difficulty)}
            >
              {difficulty}
            </button>
          ))}
        </div>
        <button
          className={`pronunciation-trainer-record-button ${
            recording ? "active" : ""
          }`}
          onClick={recording ? stopRecording : startRecording}
        >
          {recording ? "Stop Recording" : "Start Recording"}
        </button>
      </div>
      <div
        className="pronunciation-trainer-button-group"
        style={{ justifyContent: "flex-end", marginTop: "10px" }}
      >
        <button
          className="pronunciation-trainer-action-button"
          onClick={handleGenerateText}
        >
          Generate Text
        </button>
        <button className="pronunciation-trainer-action-button">Get Report</button>
      </div>
      {transcription && (
        <div className="pronunciation-trainer-transcription-output">
          <h4>Transcription:</h4>
          <p>{transcription}</p>
        </div>
      )}
    </div>
  );
};

export default PronunciationTrainer;
