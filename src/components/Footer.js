import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return(
        <StyledFooter>
            <p>© 2021 Sweet Escape</p>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 12vh;
    width: 100%;
    background: #00909E;
    color: #f1f1f1;
`

export default Footer;