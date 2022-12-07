import axios from 'axios';
import React, { useState } from 'react';

export default function Search() {
let [keyword, setKeyword] = useState("");

function handleResponse(response) {
    console.log(response)
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
        </div>
    )
}