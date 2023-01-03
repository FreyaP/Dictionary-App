import React from "react";
import styled from "styled-components";
import Audio from "./Audio";
import Meaning from "./Meaning";

const ResultsStyles = styled.div`
h1 {
    font-size: 40px;
    text-transform: uppercase;
    margin-top: 50px;
}
`;
const PhotoStyles = styled.div`
display: grid;
margin: 20px 100px;
img {
    border-radius: 10px;
    width: 100%;
    
}
`;

export default function Results({ results, hero }) {

    if (results && hero) {
        return (
        <ResultsStyles>
            <h1>{results.word}</h1>
           
            <h4>{results.phonetic}</h4>
            {results.phonetics[0]?.audio ? <Audio audio={results.phonetics[0].audio} id={results.word}/> : null}
            <PhotoStyles>
            <img src={hero.src.landscape} alt={results.word}/>
            </PhotoStyles>
            {results.meanings.map((meaning, index) => {
                return (
                    <div key={index}>
                        <Meaning meaning={meaning} />
                    </div>
                )})}
        </ResultsStyles>
    )
    } else {
        return null;
    }
}