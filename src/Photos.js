import React from "react";
import styled from "styled-components";

const PhotoStyles = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 10px;
margin: 20px 100px;

img {
    width: 100%;
    border-radius: 10px;
}

@media (width <= 600px) {
    grid-template-columns: 1fr 1fr;
    margin: 20px 50px;
}

`

export default function Photos({photos}) {

    if (photos) {
return (
    <PhotoStyles>
        {photos.map((photo, index) => {
            return (
                <img src={photo.src.landscape} alt={photo.alt} key={index}/>
            )
        })}
    </PhotoStyles>
)} else {
    return null;
}
}