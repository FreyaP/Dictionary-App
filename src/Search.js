import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import Results from './Results';

const FormStyles = styled.form`
input {
    border-radius: 10px;
    font-size: 30px;
    border: 2px solid #333;
    box-shadow: 5px 5px 5px grey;
    padding: 6px 4px;
    color: #333;
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
            <h1>Search Word!</h1>
            <FormStyles onSubmit={search}>
                <input type='search' onChange={e => setKeyword(e.target.value)}/>
            </FormStyles>
            <Results results={results}/>
        </div>
    )
}