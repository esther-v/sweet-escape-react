import {useState}  from 'react';

const LogiqueModaleConnexion = () => {
    const [montre, changeMontre] = useState(false);
   
    function bascule(){
        changeMontre(!montre)
    }

    return {
        montre,
        bascule
    }
};

export default LogiqueModaleConnexion;