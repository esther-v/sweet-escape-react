import React, {useContext} from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import authContext from '../store';

const BtnDeconnect = (props) => {
    const store = useContext(authContext);
    function logOut(){
        localStorage.clear();
        store.setIsAuth(false);
        props.history.push('/');
    }
    return(
        <StyledButton onClick={logOut}>
            Se déconnecter
        </StyledButton>
    )
}

const StyledButton = styled.button`
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
    background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
    color: white;
    cursor: pointer;
    &:hover{
        border: 1px solid #00909E;
        background: white;
        color: #00909E;
    }
    @media (max-width: 500px){
        display: block;
        margin: 0 auto;
    }  
`

export default withRouter(BtnDeconnect);