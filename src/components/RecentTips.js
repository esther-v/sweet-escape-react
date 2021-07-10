import React from 'react';
import styled from 'styled-components';

const RecentTips = () => {
    return(
        <StyledMostRecent>
            <h2>Derniers bons plans partagés</h2>
            <div className="box-tips">

            </div>
        </StyledMostRecent>
    )
}

const StyledMostRecent = styled.div`
    background: lightblue;
`

export default RecentTips;