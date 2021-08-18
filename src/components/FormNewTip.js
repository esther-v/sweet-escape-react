import React, {useState} from 'react';
import tipService from '../services/tip_service';
import styled from 'styled-components';

const FormNewTip = () => {

    const [place_name, setPlaceName] = useState("");
    const [description, setDescription] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [type, setType] = useState("");
    const [error, setError] = useState("");

    const RadioInput = ({label, value, checked, setter}) => {
        return (
          <StyledRadio>
            <input type="radio" checked={checked === value}
                   onChange={() => setter(value)} />
            <span>{label}</span>
          </StyledRadio>
        );
    };

    const handleSubmit = async (e) => {
        const tip_infos = {
            place_name: place_name,
            description: description,
            city: city,
            country: country,
            type: type};
        try {
            const response = await tipService.newTip(tip_infos);
            if(response.status === 201) {
                console.log(response);
            }
        } catch(error) {
            console.log(error);
            setError(error);
        }
    }

    return(
        <StyledFormTip>
            <h3>Créer un nouveau bon plan :</h3>
            <form onSubmit={handleSubmit}>
                    
            { error === ""
                ? null
                : <h5> <button onClick={()=> setError("")}> X </button> </h5>} 

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
                
                <div className="radiobuttons">
                    <label className="labelradio">Type de bon plan :</label>
                    <RadioInput label="Activités culturelles" value="culture" checked={type} setter={setType}  />
                    <RadioInput label="Activités extérieures" value="exterieur" checked={type} setter={setType} />
                    <RadioInput label="Restaurants/bars/cafés" value="restaurant" checked={type} setter={setType} />
                    <RadioInput label="Hébergements" value="hebergement" checked={type} setter={setType} />
                </div>

                <button type="submit">Envoyer</button>
            </form>
        </StyledFormTip>
    )
}

const StyledFormTip = styled.div`
    margin: 30px auto;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    background-color: rgba(0,144,158, 0.1);
    form{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 40px;
        input, textarea {
            margin-bottom: 20px;
        }
        .radiobuttons {
            display: flex;
            flex-direction:column;
            .labelradio {
                margin-bottom: 10px;
            }
        }
    }
    @media (max-width: 420px){
        margin: 30px 0;
    }
`

const StyledRadio = styled.label`
    span{
        color: black;
        margin-left: 5px;
    }
`

export default FormNewTip;