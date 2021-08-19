import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Tip from './Tip';
import sea from '../img/sea.png';

const RecentTips =  () => {

    const [tips, setTips] = useState([]);
    // eslint-disable-next-line 
       useEffect(async () => {
            try {
                const response = await fetch(`http://localhost:8181/api/recent_tips`);
                const data = await response.json();
                console.log(data);
                setTips(data.result);
            } catch (error) {
                console.log(error);
            }
       }, [])
        
    return(
        <StyledMostRecent>
            <div className="container">
                <div className="box">
                    <h2>Derniers bons plans partagés</h2>
                </div>
                <div className="box-tips" >
                    {tips.map((tip, i) =>(
                        <Tip 
                        key={i} 
                        id_tip={tip.id_tip}
                        place_name={tip.place_name}
                        description={tip.description}
                        country={tip.country}
                        city={tip.city}
                        date={tip.date}
                        type={tip.type}
                        firstname={tip.firstname}
                        country_user={tip.country_user}
                        />
                    ))}
                </div>
                <i className="fas fa-map-pin fas1"></i>
                <i className="fas fa-map-pin fas2"></i>
            </div>
        </StyledMostRecent>
    )
}

const StyledMostRecent = styled.div`
    padding: 40px 60px;
    margin: 50px 0;
    .container{
        width: 100%;
        border: 1px dashed black;
        position: relative;
        padding: 0 10px 40px;
    }
    .fas1, .fas2{
       position: absolute;
       color: #00909E;
       font-size: 28px;
   }
   .fas1{
       top: -5px;
       left: 5px;
   }
   .fas2{
        bottom: 8px;
        right: 2px;
   }
    .box{
        /* border: 2px solid violet; */
        width: 100%;
        background: white;
    }
    h2{
        display: block;
        text-align: center;
        margin: 0 auto;
        /* border: 1px solid blue; */
        background: url(${sea}) top no-repeat;
        font-weight: 600;
        background-size: cover;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        padding: 20px;
        font-size: 40px;
    }
    .box-tips{
        background: url("https://images.unsplash.com/photo-1550613097-fe6c2c321cd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80");
        background-position: center;
        background-size: cover;
        /* border: 2px solid red; */
        padding: 30px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    @media (max-width: 440px) {
        padding: 20px 10px;
    }
    @media (max-width: 380px){
        .container{
            padding: 0 0 40px 0;
    }
    }
    
`

export default RecentTips;