import React from 'react';
import styled from 'styled-components';
import UpdateTip from './UpdateTip';


const ModaleUpdate = ({revele, cache, id_tip, place_name}) => revele ?(

    <StyledModale>
   
        <div className="wrapper">
            <div className="modale">
                <button className="close" type="button" onClick={cache}>
                    <span>&times;</span>
                </button>
                {/* <p>Modifer le bon plan</p> */}
               <UpdateTip
               id_tip={id_tip}
               place_name={place_name}/>
            </div>
        </div>
        
    </StyledModale>
) : null;

const StyledModale = styled.div`
   border: 1px solid red;
   height: 100%;
   position: relative;
   background: rgba(0, 0, 0, 0.5);
    .wrapper {
        height: 280px;
        width: 260px;
        background: #5E5252;
        position: absolute;
        top: -50%;
        left: -50%;
        transform: translate(-47.5%, -65%);
        border-radius: 5px;
    }
    .close {
        position: absolute;
        right: 15px;
        top: 15px;
        padding: 2px 4px;
        background: #00909E;
        color: white;
        border: none;
        &:hover{
            background: white;
            color: black;
        }
    }
    .modale {
        padding: 40px 20px 20px;
    }
`


export default ModaleUpdate;