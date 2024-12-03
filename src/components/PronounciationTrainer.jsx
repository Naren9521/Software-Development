import React, { useState } from "react";
import axios from "axios";
import "../assets/styles/pronounciationTrainer.css";

const PronunciationTrainer = () => {
  const [level, setLevel] = useState(null);
  const [generatedText, setGeneratedText] = useState("");
  const [recording, setRecording] = useState(false);
  const [recordingStopped, setRecordingStopped] = useState(false);
  const [transcription, setTranscription] = useState("");

  const handleLevelSelect = (selectedLevel) => {
    setLevel(selectedLevel);
  };

  const handleGenerateText = async () => {
    if (!level) {
      setGeneratedText("Please select a level before generating text.");
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8000/get-random-sentence?level=${level}`);
      
      if (response.data.error) {
        setGeneratedText(response.data.error);
      } else {
        setGeneratedText(response.data.text);
      }
    } catch (error) {
      console.error("Error fetching text:", error.response?.data?.message || error.message);
      setGeneratedText("Failed to fetch text from the server.");
    }
  };

  const handleTextChange = (e) => {
    setGeneratedText(e.target.value);
  };

  const startRecording = async () => {
    try {
      await axios.post("http://localhost:8000/start-recording");
      setRecording(true);
      setRecordingStopped(false);
      setTranscription(""); // Clear previous transcription
    } catch (error) {
      console.error("Error starting recording:", error.response?.data?.message || error.message);
    }
  };

  const stopRecording = async () => {
    try {
      await axios.post("http://localhost:8000/stop-recording");
      setRecording(false);
      setRecordingStopped(true);
    } catch (error) {
      console.error("Error stopping recording:", error.response?.data?.message || error.message);
    }
  };

  const fetchReport = async () => {
    if (!recordingStopped) {
      alert("Please stop the recording before generating the report.");
      return;
    }

    try {
      const response = await axios.get("http://localhost:8000/get-transcription");
      setTranscription(response.data.content);
    } catch (error) {
      console.error("Error fetching transcription:", error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="pronunciation-trainer-container">
      <textarea
        className="pronunciation-trainer-text-area"
        value={generatedText}
        onChange={handleTextChange}
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
            recording ? "active" : recordingStopped ? "stopped" : ""
          }`}
          onClick={recording ? stopRecording : startRecording}
        >
          {recording ? "Stop Recording" : recordingStopped ? "Stopped" : "Start Recording"}
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
        <button
          className="pronunciation-trainer-action-button"
          onClick={fetchReport}
        >
          Get Report
        </button>
      </div>
      {transcription && (
        <div className="pronunciation-trainer-transcription-output">
          <h4>Result:</h4>
          <p>{transcription}</p>
        </div>
      )}
    </div>
  );
};

export default PronunciationTrainer;
