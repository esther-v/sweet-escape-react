import React from 'react';
import styled from 'styled-components';

const Tip = ({id_tip, place_name, description, city, country, date, type, firstname, country_user}) => {
    return(
        <StyledBox key={id_tip}>
            <h3>{place_name}</h3>
            <p className="description">{description}</p>
            <p className="location"> <i className="fas fa-map-pin fas3"></i> {city}, {country}</p>
            <p>Posté le : {date} par {firstname} <span>({country_user})</span> </p>
            <p className="type">Type d'expérience : <span>{type}</span> </p>
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
    h3{
        font-family: 'Lora', serif;
    }
    .description{
        font-style: italic;
    }
    .location{
        color: #124B5C;
        font-weight: bold;
    }
    .fas3{
        position: initial;
        color: #00909E;
        font-size: 28px;
    }
    p:last-of-type{
        margin-top: 10px;
    }
    p span{
        color: #476072;
        font-style: italic
    }
    .type span{
        color: #00909E;
        font-style: normal;
    }
`

export default Tip;