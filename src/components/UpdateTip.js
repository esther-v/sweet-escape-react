import React, {useState, useEffect} from 'react';
import tipService from '../services/tip_service';

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
        e.preventDefault();
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
        <form onSubmit={onSubmit} className="update-form">
            <input 
            type="text" 
            value={updatedPlace}
            onChange={e => setUpdatedPlace(e.target.value)}
            />
            <textarea type="text" 
            value={updatedDescription}
            onChange={e => setUpdatedDescription(e.target.value)}
            />
            <button type="submit">Modifier</button>
        </form>
    )
}

export default UpdateTip;