import React from 'react';
import styled from 'styled-components';
import FormSignUp from '../components/FormSignUp';
import {Link} from 'react-router-dom';

const SignUp = () => {
    return(
        <StyledSignUp>
            <div className="box">
                <h2>S'inscrire</h2>
                <FormSignUp/>
                <p>Déjà un compte ? </p>
                <Link to="/login"><p className="connect">Se connecter</p></Link>
                
            </div>
        </StyledSignUp>
    )
}

const StyledSignUp = styled.div`
    height: 88vh;
    background: linear-gradient(180deg, rgba(4,44,75,1) 0%, rgba(56,71,110,0) 80%), url('https://images.unsplash.com/photo-1548776729-e820047ca445?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80');
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content:center;
    .box{
        height: 62vh;
        width: 260px;
        background: RGBA(0,0,0,0.55);
        margin-top: 35px;
        padding: 20px 25px;
        h2, p {
            color: #f1f1f1;
        }
        .connect{
            text-decoration: underline;
        }
    }
    `

export default SignUp;