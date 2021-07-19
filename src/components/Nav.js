import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import logoBlanc from '../img/logo-blanc.png';

const Nav = () => {
    return(
        <StyledNav>
            <h1><Link id="logo" to="/"><img src={logoBlanc} alt="logo-oiseau-blanc volant" className="logo-nav"/>Sweet Escape</Link></h1>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/bonsplans">Bons plans</Link></li>
                <li><Link to="/covoyageurs">Co-voyageurs</Link></li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 8vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 10px 25px;
    background: transparent;
    position: absolute;
    width: 100%;
    .logo-nav{
        height: 35px;

    }
    a{
        color: white;
        text-decoration: none; 
    } 
    ul{
        display: flex;
        list-style: none;
        li{
            padding-left: 30px;  
        }
    }
    #logo{
        font-size: 1.3rem;
        font-family: 'Parisienne', cursive;
        font-weight: lighter;
        
    }  

`

export default Nav;