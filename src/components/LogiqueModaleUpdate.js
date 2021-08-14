import {useState}  from 'react';

const LogiqueModaleUpdate = () => {
    const [revele, changeRevele] = useState(false);
   
    function toggle(){
        changeRevele(!revele)
    }

    return {
        revele,
        toggle
    }
};

export default LogiqueModaleUpdate;