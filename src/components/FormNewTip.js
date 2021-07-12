import React, {useState} from 'react';
import tipService from '../services/tip_service';
import styled from 'styled-components';

const FormNewTip = () => {

    const [place_name, setPlaceName] = useState("");
    const [description, setDescription] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(e);
        const tip_infos = {
            place_name: place_name,
            description: description,
            city: city,
            country: country
        };
        try {
            const response = await tipService.newTip(tip_infos);
            if(response.status === 201) {
                console.log(response);
            }
        } catch(error) {
            console.log(error.response.data.message);
            setError(error.response.data.message);
        }
    }

    return(
        <StyledFormTip>
            <p>Créer un nouveau bon plan :</p>
            <form onSubmit={handleSubmit}>
                    
            { error === ""
                ? null
                : <h5> {error} <button onClick={()=> setError("")}> X </button> </h5>} 

                <input 
                    value={place_name} 
                    type="text" 
                    placeholder="Nom du lieu"
                    onChange={e => setPlaceName(e.target.value)}/>
                <textarea 
                    value={description} 
                    name="" id="" cols="30" rows="10" 
                    placeholder="Petite description du bon plan voyage"
                    onChange={e => setDescription(e.target.value)}></textarea>
                <input 
                    value={city} 
                    type="text" 
                    placeholder="Ville"
                    onChange={e => setCity(e.target.value)}/>
                <input 
                    value={country} 
                    type="text" 
                    placeholder="Pays"
                    onChange={e => setCountry(e.target.value)}/>   

                <button type="submit">Envoyer</button>
            </form>
        </StyledFormTip>
    )
}

const StyledFormTip = styled.div`
    margin: 30px auto;
    form{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        input, textarea {
            margin-bottom: 20px;
        }
    }
`

export default FormNewTip;