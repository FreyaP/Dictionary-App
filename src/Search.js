import axios from 'axios';
import React, { useState } from 'react';
import Results from './Results';

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
            <form onSubmit={search}>
                <input type='search' onChange={e => setKeyword(e.target.value)}/>
            </form>
            <Results results={results}/>
        </div>
    )
}