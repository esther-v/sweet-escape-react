import React from 'react';
import { withRouter } from 'react-router-dom';

const BtnDeconnect = (props) => {
    function logOut(){
        localStorage.clear();
        props.history.push('/login');
    }
    return(
        <button onClick={logOut}>
            Se déconnecter
        </button>
    )
}

export default withRouter(BtnDeconnect);