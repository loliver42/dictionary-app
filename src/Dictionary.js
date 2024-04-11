import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyWord);
  let [definitions, setDefinitions] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setDefinitions(response.data);
  }

  function search() {
    let apiKey = "ffa4fe680act3be1832a3445o0790076";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a word..."
              onChange={handleKeywordChange}
            ></input>
          </form>
          <div className="hint">
            Suggested words: sunset, plants, wine, hunting...
          </div>
        </section>
        <Results results={definitions} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
