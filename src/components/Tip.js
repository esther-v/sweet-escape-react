import React from 'react';
import styled from 'styled-components';

const Tip = ({place_name}) => {
    return(
        <StyledBox>
            <h1>{place_name}</h1>
        </StyledBox>
    );
}

const StyledBox = styled.div`
    border-radius: 10px;
    box-shadow: 0px 5px 20px rgb(71, 71, 71);
    margin: 20px;
    background: white;
    align-items: center;
    min-width: 40%;
    padding: 10px;
`

export default Tip;