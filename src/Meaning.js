import React from "react";

export default function Meaning({ meaning }) {
    return (
        <div>
         <h5>{meaning.partOfSpeech}</h5>
         {meaning.definitions.map((definition, index) => {
            return (
                <div key={index}>
                    <p>{definition.definition}
                    <br /><em>{definition.example}</em></p>
                </div>
            )
         })}
        </div>
    )
}