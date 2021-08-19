import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import river from '../img/river.png';


const NewBonPlan = () => {

    return (
        <StyledBoxNewTip>
                <div className="box">
                    <h2>Poster un nouveau bon plan</h2>
                    <p>Pour partager un bon plan voyage avec notre communauté, veuillez vous créer un compte ici:</p>
                    <button> <Link to="/signup" className="link">Créer un compte en 2 minutes</Link></button>
                   
                    <p>Ou vous connecter à votre compte:</p>
                    <button> <Link to="/login" className="link">Se connecter</Link></button>
                   
                </div>
        </StyledBoxNewTip>
    )
}

const StyledBoxNewTip = styled.div`
    margin: 50px 0;
    width: 100%;
    background: url(${river}),  no-repeat;
    background-size: cover;
    background-position: center;
    .box {
        width: 50%;
        margin: 0 auto;
        text-align: center;
        background: #EEEEEE;
        box-shadow: 0px 0px 50px 10px #fff;
        padding: 30px 20px;
        h2{
            font-size: 36px;
            font-weight: 600;
            color: #042C4B;
        }
        p{
            margin: 50px 0 20px;
        }
        button{
            display: block;
            margin: auto;
            background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            font-weight: bold;
            color: white;
            cursor: pointer;
            &:hover{
                background: #00909E;
            }
            .link{
            text-decoration: none;
            color:white;
            font-weight: bold;
            font-size: 14px;
            }
        }
    }

    @media (max-width: 560px){
        padding: 20px 0;
        .box{
            width: 60%;
            p{
            font-size: 16px;
            }
        }       
    }
    @media (max-width: 480px){
        .box{
            width: 70%;
            height: 50%;
            padding: 10px 5px;
            box-shadow: none;
        }
    }
    @media (max-width: 380px) {
        .box{
            width: 85%;
        }
    }

`

export default NewBonPlan;