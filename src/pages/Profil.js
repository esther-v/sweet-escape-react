import React, { useState, useEffect } from 'react';
import LandingProfil from '../components/LandingProfil';
import FormNewTip from '../components/FormNewTip';
import MyTip from '../components/MyTip';
import styled from 'styled-components';
import userService from '../services/user';



const Profil = () => {
    
    const [myTips, setMyTips] = useState([]);

    useEffect(() => {
        async function fetchData() {
            // const tipinfos = myTips;
        try {
            const response = await userService.mytips();
            if(response.status === 200) {
                console.log(response);
                setMyTips(response.data.result);
            }
        
            
        } catch (error) {
            console.log(error);
        }
     }
     fetchData();
   }, [])

    return(
        <StyledProfil>
            <LandingProfil/>
            <div className="box-profil">
                <h4>Informations profil</h4>
                <p>Prénom</p>
                <p>Ville</p>
                <p>Pays</p>
                <p>Description</p>
                <div className="my-tips">
                    <h4>Les expériences que j'ai postées : </h4>
                    {myTips.map(myTip => (
                        <MyTip 
                        key={myTip.id_tip} 
                        id_tip={myTip.id_tip} 
                        place_name={myTip.place_name} 
                        description={myTip.description} 
                        publish={myTip.publish}
                        type={myTip.type}/>
                        
                    ))}
                   
                </div>
                <FormNewTip/>
            </div>
        </StyledProfil>
    )
}

const StyledProfil = styled.div`
    .box-profil{
        padding: 40px 60px;
    }
    .my-tips{
        margin: 20px 0;
    }
`

export default Profil;