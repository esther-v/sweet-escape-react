import React from 'react';
import styled from 'styled-components';
import LogiqueModaleInscription from './LogiqueModaleInscription';
import LogiqueModaleConnexion from './LogiqueModaleConnexion';
import ModaleInscription from './ModaleInscription';
import ModaleConnexion from './ModaleConnexion';
import mountainsunset from '../img/mountain-sunset.png';



const NewBonPlan = () => {

    const {revele, toggle} = LogiqueModaleInscription();
    const {montre, bascule} = LogiqueModaleConnexion();

    return (
        <StyledBoxNewTip>
            <div className="container">
                <div className="box">
                    <h2>Poster un nouveau bon plan</h2>
                    <p>Pour partager un bon plan voyage avec notre communauté, veuillez vous créer un compte ici :</p>
                    <button onClick={toggle}>Créer un compte en 2 minutes</button>
                    <ModaleInscription
                        revele={revele}
                        cache={toggle}
                    />
                    <p>Ou vous connecter à votre compte :</p>
                    <button onClick={bascule}>Se connecter</button>
                    <ModaleConnexion
                        revele={montre}
                        cache={bascule}
                    />
                </div>
            </div>
        </StyledBoxNewTip>
    )
}

const StyledBoxNewTip = styled.div`
    border: 1px solid red;
    padding : 50px 0;
    .container {
        border: 1px solid blue;
        width: 100%;
        background: url(${mountainsunset}),  no-repeat;
        background-size: cover;
        background-position: center;
    }
    .box {
        width: 60%;
        margin: 0 auto;
        border: 1px solid green;
        text-align: center;
        background: #EEEEEE;
        box-shadow: 0px 0px 50px 10px #fff;
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
    }

`

export default NewBonPlan;