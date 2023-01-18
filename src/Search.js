
import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import Results from './Results';
import Photos from './Photos';
import env from 'react-dotenv';




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
let [photos, setPhotos] = useState(null);
let [hero, setHero] = useState(null);

function handleResponse(response) {
    setResults(response.data[0]);
}
function handlePexelResponse(response) {
    setPhotos(response.data.photos);
    setHero(response.data.photos[0]);
}

function search(e) {
e.preventDefault();
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
const pexelApiKey = env.PEXEL_API_KEY;
let pexelApiUrl =`https://api.pexels.com/v1/search?query=${keyword}&per_page=6`
axios.get(apiUrl).then(handleResponse);
axios.get(pexelApiUrl, {
    headers: {Authorization: `Bearer ${pexelApiKey}`}
}).then(handlePexelResponse);
e.target.reset(); // clear form
}


    return (
        <div>
            <h1>Search Word!</h1>
            <FormStyles onSubmit={search}>
                <input type='search' onChange={e => setKeyword(e.target.value)}/>
            </FormStyles>
            
            <Results results={results} hero={hero}/>
            <Photos photos={photos} />
        </div>
    )
}