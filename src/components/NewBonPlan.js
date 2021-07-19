import React from 'react';
import styled from 'styled-components';
import LogiqueModaleInscription from './LogiqueModaleInscription';
import LogiqueModaleConnexion from './LogiqueModaleConnexion';
import ModaleInscription from './ModaleInscription';
import ModaleConnexion from './ModaleConnexion';



const NewBonPlan = () => {

    const {revele, toggle} = LogiqueModaleInscription();
    const {montre, bascule} = LogiqueModaleConnexion();

    return (
        <StyledBoxNewTip>
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

        </StyledBoxNewTip>
    )
}

const StyledBoxNewTip = styled.div`
    border: 1px solid red;
    padding : 40px 60px;
    button{
        display: block;
        margin: auto;
    }

`

export default NewBonPlan;