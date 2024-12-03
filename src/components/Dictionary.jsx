// import React, { useState } from "react";
// import translate from "translate";
import "../assets/styles/Dictionary.css";

import React, { useState } from "react";
import translate from "translate";
// import "./Dictionary.css"; // Keep this local CSS for dictionary-specific styles

// Initialize the translate library with a default engine
translate.engine = 'google'; // This uses Google's free translation engine

const Dictionary = () => {
  const [query, setQuery] = useState("");
  const [translations, setTranslations] = useState({});
  const [sentences, setSentences] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to get translations using 'translate' library
  const fetchTranslations = async (word) => {
    try {
      const hindi = await translate(word, { to: 'hi' }); // Translate to Hindi
      const bengali = await translate(word, { to: 'bn' }); // Translate to Bengali
      const telugu = await translate(word, { to: 'te' }); // Translate to Telugu
      return { hindi, bengali, telugu };
    } catch (error) {
      console.error("Error fetching translations:", error);
      return { hindi: "Translation error", bengali: "Translation error", telugu: "Translation error" };
    }
  };

  // Function to generate example sentences using the word
  const generateSentences = (word) => {
    return [
      `The word "${word}" is commonly used in various contexts.`,
      `In many languages, including Hindi and Bengali, the word "${word}" has a similar meaning.`,
      `Using the word "${word}" can enhance your communication skills significantly.`
    ];
  };

  // Function to handle search and fetch data
  const handleSearch = async () => {
    if (!query.trim()) {
      alert("Please enter a word to search.");
      return;
    }

    setLoading(true);
    try {
      // Fetch translations
      const translationsData = await fetchTranslations(query);
      setTranslations(translationsData);

      // Generate example sentences using the word
      const exampleSentences = generateSentences(query);
      setSentences(exampleSentences);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="content"> {/* Wrapper with consistent global structure */}
      {/* Top bar reused */}
      <div className="top-bar">
        <div className="heading">
          <h1>Learn from the best</h1>
        </div>
        <div className="right-section">
          <button className="upgrade-btn">Upgrade to Premium</button>
          <div className="profile">
            <i className="fas fa-user-circle"></i>
            <span>Profile</span>
          </div>
        </div>
      </div>

      {/* Dictionary content */}
      <div className="dictionary-container">
        <h1 className="title">Dictionary</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter a word..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="input-field"
          />
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>

        {loading && <p className="loading">Loading...</p>}

        {translations.hindi && translations.bengali && translations.telugu && (
          <div className="translations-section">
            <h2>Translations:</h2>
            <ul>
              <li>Hindi: {translations.hindi}</li>
              <li>Bengali: {translations.bengali}</li>
              <li>Telugu: {translations.telugu}</li>
            </ul>
          </div>
        )}

        {sentences.length > 0 && (
          <div className="sentences-section">
            <h2>Example Sentences:</h2>
            <ul>
              {sentences.map((sentence, index) => (
                <li key={index} className="sentence-item">
                  {sentence}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dictionary;
