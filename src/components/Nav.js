import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <StyledNav>
            <h1><Link id="logo" to="/">Sweet Escape</Link></h1>
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
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }  

`

export default Nav;