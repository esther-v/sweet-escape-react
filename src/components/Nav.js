import React, {useContext, useState, useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoBlanc from '../img/logo-blanc.png';
import userIcon from '../img/user1.svg';
import authContext from '../store';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';



const Nav = () => {
    const { pathname } = useLocation();
    console.log(pathname)
    const store = useContext(authContext);
    const [connected, isConnected] = useState(store.isAuth);
    useEffect(() => {
        isConnected(store.isAuth);
    }, [store.isAuth]);


    const [open, setOpen] = useState(false);
    const closeBurger = () => setOpen(false);
    return(
        
        <StyledNav open={open}>
           <Link id="logo" to="/"><img src={logoBlanc} alt="logo-oiseau-blanc volant" className="logo-nav"/><h1>Sweet Escape</h1> </Link>
            <ul open={open}>
                <li onClick={closeBurger}>
                    <Link to="/">Accueil</Link>
                    <Line 
                        transition={{duration: 0.5}} 
                        initial={{width: '0%'}}
                        animate={{width: pathname === "/" ? '65%' : '0%'}}
                    />
                </li>
                <li onClick={closeBurger}>
                    <Link to="/bonsplans">Bons plans</Link>
                    <Line 
                        transition={{duration: 0.5}} 
                        initial={{width: '0%'}}
                        animate={{width: pathname === "/bonsplans" ? '73%' : '0%'}}
                    />
                </li>
                <li onClick={closeBurger}>
                    <Link to="/covoyageurs">Co-voyageurs</Link>
                    <Line 
                        transition={{duration: 0.5}} 
                        initial={{width: '0%'}}
                        animate={{width: pathname === "/covoyageurs" ? '78%' : '0%'}}
                    />
                </li>
                <li onClick={closeBurger}>
                    <Link to="/login">Compte</Link>
                    <Line 
                        transition={{duration: 0.5}} 
                        initial={{width: '0%'}}
                        animate={{width: pathname === "/login" || pathname === "/signup" ? '67%' : '0%'}}
                    />
                </li>
                {connected?
                <>
                <li onClick={closeBurger}><Link to="/profil"><img src={userIcon} alt="icone utilisateur" className="icon"/></Link></li>
                </>
                : null
                }

            </ul>
            <Burger open={open} onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </Burger>
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
            position: relative;  
        }
    }
    
    #logo{
        display: flex;
        align-items: flex-end;
        justify-content: center;
        /* border: 1px solid red; */
    }
    .logo-nav{
        height: 35px;
        margin-bottom: 6px;
    }
    #logo h1{
        font-size: 22px;
        font-family: 'Parisienne', cursive;
        font-weight: lighter;
        margin: 0 0 3px 3px;
    }  
    .icon{
        filter: invert(100%) sepia(3%) saturate(731%) hue-rotate(161deg) brightness(115%) contrast(100%);        
        height: 20px;
        border-radius: 50%;
    }
    @media (max-width: 750px){
        ul{
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: #00909E;
            gap: 50px;
            transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
            /* transform: translateX(100%); */
            transition: 0.5s;
        }
    }

`
const Line = styled(motion.div)`
    height: 0.2rem;
    background: #00909E;
    width: 0%;
    position: absolute;
    bottom: -30%;
    left: 30px;
    @media (max-width: 750px){
        background: #005792;
    }
`
const Burger = styled.div`
    display: none;
    span{
        margin: 4px 0;
        width: 32px;
        height: 2.5px;
        background: white;
        border-radius: 54px;
        display: block;
    }
    @media (max-width: 750px) {
        display: block;
        span:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg) translate(7px, 2.3px)' : 'rotate(0)'};
        }
        span:nth-child(2) {
            opacity: ${({ open }) => open ? 0 : 1};
        }
        span:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg) translate(7px, -2px)' : 'rotate(0)'};
        }
    }
`



export default Nav;