import React, { useState, useEffect } from 'react';
import userService from '../services/user';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { validateEmail } from '../utils/emailValidation';
import usePasswordValidator from '../utils/passwordValidation';
import FirstnameValidator from '../utils/firstnameValidation';

const FormSignUp = (props) => {

    const [firstname, setFirstName, firstnameError] = FirstnameValidator({min: 2, max: 15});
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword, passwordError] = usePasswordValidator({min: 6, max: 15});
    const [birthday, setBirthday] = useState("");
    const [country, setCountry] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    useEffect( () => {
        if (!email) {
            setEmailError("");
        } else {
            if (validateEmail(email)) {
                setEmailError("");
            } else {
                setEmailError("Veuillez entrer un email valide.");
            }
        }
      },
      [email]
    );

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
                    props.history.push('/bonsplans')
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
                : <p> {error} <button onClick={()=> setError("")}> X </button> </p>} 
            <input
                value={firstname}
                onChange={e => setFirstName(e.target.value)}
                type="text"
                minLength="2"
                maxLength="15"
                placeholder="Prénom"
                required
            />

            <p className="error">{firstnameError}</p>

            <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                required
            />
            <p className="error">{emailError}</p>

            <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                minLength="6"
                maxLength="15"
                placeholder="Password"
                required

            />
            <p className="error">{passwordError}</p>

            <input
                value={birthday}
                onChange={e => setBirthday(e.target.value)}
                type="date"
            />
            <input
                value={country}
                onChange={e => setCountry(e.target.value)}
                type="text"
                placeholder="Pays"
                required
            />
            <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                type="text"
                placeholder="Décrivez-vous en quelques mots"
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
        outline: none;
    }
    .error{
        color: red;
        font-size: 10px;
    }
    
`

export default withRouter (FormSignUp);