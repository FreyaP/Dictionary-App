import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import Results from './Results';

const FormStyles = styled.form`
input {
    border-radius: 10px;
    font-size: 30px;
    border: 2px solid black;
    box-shadow: 10px 10px 10px grey;
}
`;

export default function Search() {
let [keyword, setKeyword] = useState("");
let [results, setResults] = useState(null);

function handleResponse(response) {
    setResults(response.data[0]);
}

function search(e) {
e.preventDefault();
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
axios.get(apiUrl).then(handleResponse);
e.target.reset(); // clear form
}


    return (
        <div>
            <FormStyles onSubmit={search}>
                <input type='search' onChange={e => setKeyword(e.target.value)}/>
            </FormStyles>
            <Results results={results}/>
        </div>
    )
}