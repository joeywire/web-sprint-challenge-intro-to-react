import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

// Write your Character component here


const StyledCharContainer = styled.div`
    border: 1px solid grey;
    width: 15rem;
    margin: 2% auto;
    padding: 0 2%2%;
    text-align: center;

    h3 {
        font-style: italic;
    }

    img {
        border-radius: 5px;
        max-width: 75%;
        height: auto;
    }

`


export default function Char(props) {
    const {charID, charName, charImage, charWorld} = props;
    const [charInfo, setCharInfo] = useState(null);
    
    return (
        <StyledCharContainer>
            <h3>{charName}</h3>
            {/* <button>Show Me More!</button> */}
            <img src={charImage} />
            <p>Home World: {charWorld}</p>
        </StyledCharContainer>
    );

}