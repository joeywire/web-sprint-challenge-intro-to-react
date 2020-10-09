import React, {useState} from 'react';
import styled from 'styled-components';

// Write your Character component here
const StyledCharContainer = styled.div`
    border: 1px solid grey;
    width: 45%;
    margin: 2% auto;
    text-align: center;

    h3 {
        font-style: italic;
    }

`


export default function Char(props) {
    const {key, character} = props;
    
    return (
        <StyledCharContainer>
            <h3>{character.name}</h3>
            <img src={character.image} />
            <p>Home World: {character.origin.name}</p>
        </StyledCharContainer>
    );

}