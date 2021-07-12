import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import authContext from '../store';
import userService from '../services/user';


const FormLogin = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const authStore = useContext(authContext);


    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(e);
        // console.log(email, password);
        
        try {
            const response = await userService.login(email, password);
            if(response.status === 200) {
                console.log(response);
                localStorage.setItem('token', response.data.token);
                authStore.setToken(response.token);
                authStore.setIsAuth(true);
                props.history.push('/bonsplans');
                
            } 
            
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <StyledForm onSubmit={handleSubmit}>

            { error === ""
                ? null
                : <h5> {error} <button onClick={()=> setError("")}> X </button> </h5>} 

            <input 
                value={email}
                type="text" 
                placeholder="email" 
                onChange={e => setEmail(e.target.value)}/>
                
            <input 
                value={password}
                type="password" 
                placeholder="password" 
                onChange={e => setPassword(e.target.value)}/>
            <button type="submit">Se connecter</button>
        </StyledForm>
    )
}

const StyledForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    input{
        margin-bottom: 20px;
    }
`

export default FormLogin;