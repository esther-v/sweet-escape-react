import React from 'react';
import styled from 'styled-components';
import FormLogin from './FormLogin';

const ModaleConnexion = ({revele, cache}) => revele ? (

    <StyledModale>
        <div className="overlay"></div>
        <div className="wrapper">
            <div className="modale">
                <button className="close" type="button" onClick={cache}>
                    <span>&times;</span>
                </button>
                <p>Se connecter</p>
                <FormLogin/>
            </div>
        </div>
    </StyledModale>

) : null;

const StyledModale = styled.div`
   
    .overlay {
        background: rgba(0, 0, 0, 0.7);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: -92%;
    }
    .wrapper {
        height: 300px;
        width: 300px;
        background: rgb(214,105,127);
        position: absolute;
        top: 150%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 8px;
    }
    .close {
        position: absolute;
        right: 15px;
        top: 15px;
    }
    .modale {
        padding: 40px 20px 20px;
    }
`

export default ModaleConnexion;