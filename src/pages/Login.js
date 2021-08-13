import React from 'react';
import styled from 'styled-components';
import login_bg from '../img/login.jpg';
import FormLogin from '../components/FormLogin';
import {Link} from 'react-router-dom';

const Login = () => {
    return(
        <StyledLogin>
            <div className="box">
                <h2>Se connecter</h2>
                <FormLogin/>
                <p>Pas encore de compte ? </p>
                <Link to="/signup"><p className="connect">S'inscrire</p></Link>
            </div>
        </StyledLogin>
    )
}

const StyledLogin = styled.div`
    min-height: 88vh;
    background: linear-gradient(180deg, rgba(4,44,75,1) 0%, rgba(56,71,110,0) 80%), url(${login_bg});
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content:center;
    .box{
        height: auto;
        width: 260px;
        background: RGBA(0,0,0,0.44);
        margin: 90px auto 50px;
        padding: 20px 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        h2, p {
            color: #f1f1f1;
    
        }
        .connect{
            text-decoration: underline;
            &:hover{
            color: #00909E;
            }
        }
    }
`

export default Login;