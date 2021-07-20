import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import tipService from '../services/tip_service';

const MyTip = ({id_tip, place_name, description, publish, type}, props) => {

    const handleSubmit = async (e) => {
        console.log(id_tip);
        console.log(e);
        try {
            const response = await tipService.deleteTip(id_tip);
            if(response.status === 200) {
                console.log(id_tip)
                console.log(response);  
                props.history.push('/profil')
            } 
            
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <StyledBoxTip>
            <h4>{place_name}</h4>
            <p>{description}</p>
            <p>Posté le : {publish}</p>
            <p>Type : {type}</p>
            <div className="box-boutons">
                <button>Modifier</button>
                <button type="submit" onClick={handleSubmit}>Supprimer</button>
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

export default withRouter(MyTip);