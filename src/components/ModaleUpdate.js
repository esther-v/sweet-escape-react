import React from 'react';
import styled from 'styled-components';
import UpdateTip from './UpdateTip';


const ModaleUpdate = ({revele, cache, id_tip, place_name}) => revele ?(

    <StyledModale>
        <div className="overlay"></div>
        <div className="wrapper">
            <div className="modale">
                <button className="close" type="button" onClick={cache}>
                    <span>&times;</span>
                </button>
                <p>Modifer le bon plan</p>
               <UpdateTip
               id_tip={id_tip}
               place_name={place_name}/>
            </div>
        </div>
    </StyledModale>
) : null;

const StyledModale = styled.div`
   
    .overlay {
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .wrapper {
        height: 500px;
        width: 700px;
        background: rgb(214,105,127);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .close {
        position: absolute;
        right: 15px;
        top: 15px;
    }
    .modale {
        padding: 40px 20px 20px;
    }
`


export default ModaleUpdate;