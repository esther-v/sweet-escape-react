import React, { useState } from 'react';
import userService from '../services/user';
import styled from 'styled-components';

const FormSignUp = () => {

    const [firstname, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState("");
    const [country, setCountry] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
       e.preventDefault();
        console.log(e);
        const user = {
            firstname: firstname,
            email: email,
            password: password,
            birthday: birthday,
            country: country,
            description: description
            };
            try {
                const response = await userService.signup(user);
                if(response.status === 201) {
                    console.log(response);
                    // this.history.push('/bonsplans');
                }
            } catch(error) {
                console.log(error.response.data.message);
                setError(error.response.data.message)
            }
    }

    return(
        <StyledForm onSubmit={handleSubmit}>

           { error === ""
                ? null
                : <h5> {error} <button onClick={()=> setError("")}> X </button> </h5>} 
            <input
                value={firstname}
                onChange={e => setFirstName(e.target.value)}
                type="text"
                placeholder="Prénom"
            />
            <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
            />
            <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
            />
            <input
                value={birthday}
                onChange={e => setBirthday(e.target.value)}
                type="text"
                placeholder="YYYY-MM-DD"
            />
            <input
                value={country}
                onChange={e => setCountry(e.target.value)}
                type="text"
                placeholder="Pays"
            />
            <input
                value={description}
                onChange={e => setDescription(e.target.value)}
                type="text"
                placeholder="Description"
            />
            <button type="submit">Envoyer</button>
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

export default FormSignUp;