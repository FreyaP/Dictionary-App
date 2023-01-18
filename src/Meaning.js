import React from "react";
import styled from "styled-components";
import Synonyms from "./Synonyms";
import { useTheme } from './context/ThemeContext';

const MeaningStyles = styled.div`
padding-bottom: 10px;
margin: 20px 100px;
padding: 10px;
border: ${props => props.darkTheme ? '2px solid white' : '2px solid black'};
border-radius: 10px;
box-shadow: 5px 5px 5px grey ;


h3 {
    font-size: 24px;
}

em {
    font-size: 16px;
    opacity: 75%;
}
 p {
    margin-top: 15px;
 }

 @media (width <= 600px) {
    margin: 20px 50px;
 }

`;

export default function Meaning({ meaning }) {

    const darkTheme = useTheme()

    return (
        <MeaningStyles darkTheme={darkTheme}>
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