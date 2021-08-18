import React, { useState, useEffect } from 'react';
import LandingProfil from '../components/LandingProfil';
import FormNewTip from '../components/FormNewTip';
import MyTip from '../components/MyTip';
import BtnDeconnect from '../components/BtnDeconnect';
import styled from 'styled-components';
import userService from '../services/user';
import RandomQuote from '../components/RandomQuote';

const Profil = () => {
    
    const [myTips, setMyTips] = useState([]);
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        async function fetchData() {
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

    useEffect(() => {
        async function fetchData() {
        try {
            const response = await userService.profile();
            if(response.status === 200) {
                console.log(response);
                setProfile(response.data.result[0]);
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
                <div className="infos">
                    <div className="profil">
                        <h3>Informations profil</h3>
                        <p>Prénom: <span>{profile.firstname}</span></p>
                        <p>Pays: <span>{profile.country_user}</span></p>
                        <p>Description: <span>{profile.description}</span></p>
                        <p>Email: <span>{profile.email}</span></p>
                    </div>   
                    <BtnDeconnect/>
                </div>
                
                <div className="experiences">
                    <h3>Les expériences que j'ai postées : </h3>
                    <div className="my-tips">
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
                </div>
                <FormNewTip/>
            </div>
            <RandomQuote/>
        </StyledProfil>
    )
}

const StyledProfil = styled.div`
    .box-profil{
        padding: 40px 60px;
        border: 1px solid green;
        .infos{
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            margin-bottom: 40px;
            border:1px solid blue;
            p{
                font-style: italic;
                span{
                    font-style: normal;
                    color: #00909E;
                }
            }
        }
        .experiences{
            h3{
                text-align: center;
            }
        }
    }  
    .my-tips{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 20px 0;
    }
    @media (max-width: 500px){
        .box-profil{
            padding: 40px 20px;
        }
        .infos {
           flex-direction: column-reverse;
           justify-content: center;
           align-items: center;
           .profil{
            border: 1px solid red;
            margin: 20px auto;
        }
        }  
    }
`

export default Profil;