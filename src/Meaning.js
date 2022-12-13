import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning({ meaning }) {
    return (
        <div>
         <h3>{meaning.partOfSpeech}</h3>
         {meaning.definitions.filter((item, index) => index < 3).map((definition, index) => {
            return (
                <div key={index}>
                    <p>{definition.definition}
                    <br />
                    {definition.example ? <em>Example: {definition.example}</em> : null}
                    </p>  
                </div>
            )
         
         })
         }
          
         <Synonyms synonyms={meaning.synonyms} />
        </div>
    )
}