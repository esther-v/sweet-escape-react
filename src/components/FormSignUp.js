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
    const [country_user, setCountry] = useState("");
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
            country_user: country_user,
            description: description
            };
            try {
                const response = await userService.signup(user);
                if(response.status === 201) {
                    props.history.push('/login')
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
                minLength="2"
                maxLength="15"
                placeholder="Prénom*"
                required
            />

            <h5 className="error">{firstnameError}</h5>

            <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                placeholder="Email*"
                required
            />
            <h5 className="error">{emailError}</h5>

            <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                minLength="6"
                maxLength="15"
                placeholder="Mot de passe*"
                required

            />
            <h5 className="error">{passwordError}</h5>

            <label htmlFor="birthday">Date de naissance*</label>
            <input
                value={birthday}
                onChange={e => setBirthday(e.target.value)}
                type="date"  
                id="birthday"
                required
            />
            <input
                value={country_user}
                onChange={e => setCountry(e.target.value)}
                type="text"
                placeholder="Pays*"
                required
            />
            <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                type="text"
                placeholder="Une description de vous en quelques mots"
                cols="20"
                rows="3"
                maxLength="200"
            />
            <h6>*Champs requis</h6>
            <button type="submit">S'inscrire</button>
        </StyledForm>
    )
}

const StyledForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto 20px;
    input,textarea {
        margin-top: 20px;
        outline: none;
        padding: 8px;
        border-radius: 5px;
        border:none;
    }
  
    textarea{
        margin-bottom: 20px;
    }
    label{
        color: white;
        margin-bottom: -15px;
        margin-top: 20px;
        font-size: 15px;
    }
    h5{
        font-size: 10px;
        color: red;
    }
    h6{
        color: white;
        margin-bottom: 10px;
    }
    button{
        background-color: #005792;
        color: white;
        display: block;
        padding: 10px 20px;
        border-radius: 8px;
        border:none; 
        &:hover{
            background: #00909E;
        }
    }
    
`

export default withRouter (FormSignUp);