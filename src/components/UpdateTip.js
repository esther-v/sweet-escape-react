import React, {useState, useEffect} from 'react';
import tipService from '../services/tip_service';
import styled from 'styled-components';

const UpdateTip = ({id_tip}) => {
    
    const [updatedPlace, setUpdatedPlace] = useState("");
    const [updatedDescription, setUpdatedDescription] = useState("")
 // eslint-disable-next-line
    useEffect( async () => {
        console.log(id_tip);
        try{
            const details = await tipService.tipDetails(id_tip);
            setUpdatedPlace(details.data.tip[0].place_name);
            setUpdatedDescription(details.data.tip[0].description)
            console.log(details.data.tip[0])
        }
        catch(error){
            console.log(error);
        }
    }, [id_tip])

    const onSubmit = async (e) => {
        
        try{
            const response = await tipService.updateTip(id_tip, updatedPlace, updatedDescription);
            if(response.status === 200) {

                console.log(response);  
              
            }
        }
        catch(error){
            console.log(error);
        }
    }
    
    return(
        <StyledForm onSubmit={onSubmit} className="update-form">
            <label htmlFor="place">Nom du lieu</label>
            <input 
            type="text" 
            id="place"
            value={updatedPlace}
            onChange={e => setUpdatedPlace(e.target.value)}
            />
            <label htmlFor="description">Description</label>
            <textarea 
            type="text" 
            id="description"
            cols="22"
            rows="5"
            value={updatedDescription}
            onChange={e => setUpdatedDescription(e.target.value)}
            />
            <button type="submit">Modifier</button>
        </StyledForm>
    )
}

const StyledForm = styled.form`
    input{
        width: 206px;
    }
    input, textarea{
        padding: 8px;
        margin-bottom: 5px;
        border-radius: 5px;
        border: none;
    }
    label{
        color: white;
    }
    button {
        background: #00909E;
        color: white;
        padding: 8px;
        border: none;
        border-radius: 5px;
        &:hover{
            background: white;
            color: #00909E;
        }
    }
`

export default UpdateTip;