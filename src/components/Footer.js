import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return(
        <StyledFooter>
            <p>© 2021 Sweet Escape, made with 💜 by esther</p>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 12vh;
    width: 100%;
    background: #96BAFF;
`

export default Footer;