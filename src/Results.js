import React from "react";
import Audio from "./Audio";

export default function Results({ results }) {

    if (results) {
        console.log(results);
        return (
        <div>
            <h3>{results.word}</h3>
            <h4>{results.phonetic}</h4>
            {results.phonetics[0].audio ? <Audio audio={results.phonetics[0].audio} id={results.word}/> : null}
                
          
        </div>
    )
    } else {
        return null;
    }
}