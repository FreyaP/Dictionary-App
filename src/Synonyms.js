import React from "react";

export default function Synonyms({ synonyms }) {
    if(synonyms.length) {
    return(
        <div>
             <h4>Synonyms: </h4>
            {synonyms.map((synonym, index) => {
                return (
                    <span key={index}>{synonym}, </span>
                )
            }
            )}
        </div>
    )} else {
        return null;
    }
}