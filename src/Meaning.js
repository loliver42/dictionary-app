import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>Definition: {props.meaning.definition}</p>
      <p>Example: {props.meaning.example}</p>
    </div>
  );
}
