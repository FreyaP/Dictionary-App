import React from "react";
import styled from "styled-components";
import Synonyms from "./Synonyms";

const MeaningStyles = styled.div`
padding-bottom: 10px;
margin: 20px 100px;
padding: 10px;
border: 2px solid black;
border-radius: 10px;
box-shadow: 10px 10px 10px grey;
background-color: #FFFBE9;


`;

export default function Meaning({ meaning }) {
    return (
        <MeaningStyles>
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
        </MeaningStyles>
    )
}