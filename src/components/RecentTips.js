import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Tip from './Tip';

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
            <h2>Derniers bons plans partagés</h2>
            <div className="box-tips" >
                {tips.map(tip =>(
                    <Tip 
                    key={tip.id_tip} 
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
        </StyledMostRecent>
    )
}

const StyledMostRecent = styled.div`
    background: lightblue;
    padding: 40px 60px;
    @media (max-width: 440px) {
    padding: 20px 10px;
    }
    h2{
        display: block;
        text-align: center;
        margin: 0 auto;
    }
    .box-tips{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    
`

export default RecentTips;