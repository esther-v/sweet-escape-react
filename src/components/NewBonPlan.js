import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
// import mountainsunset from '../img/mountain-sunset.png';



const NewBonPlan = () => {

    return (
        <StyledBoxNewTip>
            <div className="container">
                <div className="box">
                    <h2>Poster un nouveau bon plan</h2>
                    <p>Pour partager un bon plan voyage avec notre communauté, veuillez vous créer un compte ici :</p>
                    <button> <Link to="/signup" className="link">Créer un compte en 2 minutes</Link></button>
                   
                    <p>Ou vous connecter à votre compte :</p>
                    <button> <Link to="/login" className="link">Se connecter</Link></button>
                   
                </div>
            </div>
        </StyledBoxNewTip>
    )
}

const StyledBoxNewTip = styled.div`
    /* border: 1px solid red; */
    padding : 50px 0;
    .container {
        /* border: 1px solid blue; */
        width: 100%;
        background: url("https://images.unsplash.com/photo-1493713838217-28e23b41b798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"),  no-repeat;
        background-size: cover;
        background-position: center;
    }
    .box {
        width: 50%;
        margin: 0 auto;
        /* border: 1px solid green; */
        text-align: center;
        background: #EEEEEE;
        box-shadow: 0px 0px 50px 10px #fff;
        padding: 30px 20px;
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

`

export default NewBonPlan;