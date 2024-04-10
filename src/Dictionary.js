import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [definitions, setDefinitions] = useState(null);
  function handleResponse(response) {
    setDefinitions(response.data);
  }
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);

    let apiKey = "ffa4fe680act3be1832a3445o0790076";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter Word.."
          onChange={handleKeywordChange}
        ></input>
      </form>
      <Results results={definitions} />
    </div>
  );
}
