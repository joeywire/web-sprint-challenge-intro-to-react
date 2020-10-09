import React from 'react';

// Write your Character component here
export default function Char(props) {
    const {key, character} = props;
    
    return (
        <div>
            <p>Character: {character.name}</p>
        </div>
    )

}