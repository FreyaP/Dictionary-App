import React from 'react';

// send id to key att. to force reload and update audio
export default function Audio(props) {
    return (
        <audio controls key={props.id}>
                    <source src={props.audio} type="audio/mpeg"/>
                </audio>
    )
}