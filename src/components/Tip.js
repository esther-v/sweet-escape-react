import React from 'react';
import styled from 'styled-components';

const Tip = ({id_tip, place_name, description, city, country, date, type, firstname}) => {
    return(
        <StyledBox key={id_tip}>
            <h3>{place_name}</h3>
            <p className="description">{description}</p>
            <p className="location">{city}, {country}</p>
            <p>Posté le : {date} par {firstname}</p>
            <p>Type d'expérience : {type}</p>
        </StyledBox>
    );
}

const StyledBox = styled.div`
    border-radius: 10px;
    box-shadow: 0px 5px 20px rgb(71, 71, 71);
    background: white;
    align-items: center;
    width: 280px;
    padding: 10px;
    margin: 20px;
    @media (max-width: 440px) {
    margin: 20px 0;
    }
    .description{
        font-style: italic;
    }
    .location{
        color: #124B5C;
        font-weight: bold;
    }
`

export default Tip;