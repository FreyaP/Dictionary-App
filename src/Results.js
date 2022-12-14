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

export default function Results({ results }) {

    if (results) {
        console.log(results);
        return (
        <ResultsStyles>
            <h1>{results.word}</h1>
            <h4>{results.phonetic}</h4>
            {results.phonetics[0]?.audio ? <Audio audio={results.phonetics[0].audio} id={results.word}/> : null}
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