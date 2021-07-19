import React from 'react';
import styled from 'styled-components';

const MyTip = ({place_name, description, publish, type}) => {
    
    return(
        <StyledBoxTip>
            <h4>{place_name}</h4>
            <p>{description}</p>
            <p>Posté le : {publish}</p>
            <p>Type : {type}</p>
            <div className="box-boutons">
                <button>Modifier</button>
                <button>Supprimer</button>
            </div>
        </StyledBoxTip>
    )
}

const StyledBoxTip = styled.div`
    width: 300px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    padding: 20px;
    margin: 20px auto;
    p{
        margin: 5px auto;
    }
    .box-boutons{
        display: flex;
        justify-content: space-around;
    }
`

export default MyTip;