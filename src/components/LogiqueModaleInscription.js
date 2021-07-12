import {useState}  from 'react';

const LogiqueModaleInscription = () => {
    const [revele, changeRevele] = useState(false);
   
    function toggle(){
        changeRevele(!revele)
    }

    return {
        revele,
        toggle
    }
};

export default LogiqueModaleInscription;