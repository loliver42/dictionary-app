import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      <p>
        <strong>Definition:</strong> {props.meaning.definition}
      </p>
      <p>
        <strong>Example:</strong> {props.meaning.example}
      </p>
      <p>
        <strong>Synonyms:</strong> {props.meaning.synonyms}
      </p>
    </div>
  );
}
