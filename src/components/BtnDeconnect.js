import React, {useContext} from 'react';
import { withRouter } from 'react-router-dom';
import authContext from '../store';

const BtnDeconnect = (props) => {
    const store = useContext(authContext);
    function logOut(){
        localStorage.clear();
        store.setIsAuth(false);
        props.history.push('/login');
    }
    return(
        <button onClick={logOut}>
            Se déconnecter
        </button>
    )
}

export default withRouter(BtnDeconnect);