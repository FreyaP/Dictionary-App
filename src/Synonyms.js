import React from "react";
import styled from "styled-components";

const SynonymsStyles = styled.div`
span {
    padding: 5px;
}
`;

export default function Synonyms({ synonyms }) {
    if(synonyms.length) {
    return(
        <SynonymsStyles>
             <h4>Synonyms </h4>
            {synonyms.map((synonym, index) => {
                if (synonyms.length > 1) {
                return (
                    <span key={index}>{synonym}, </span>
                )
                } else {
                    return (
                        <span key={index}>{synonym} </span>
                    )
                }
            }
            )}
        </SynonymsStyles>
    )} else {
        return null;
    }
}