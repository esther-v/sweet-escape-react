import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Square = () => {
    return(
        <SquareSvg width="612" height="186" viewBox="0 0 612 196" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
        initial={{pathLength: 0, pathOffset: 1}}
        animate={{pathLength: 1, pathOffset: 0}}
        transition={{ duration: 1}}
        d="M611 1H1V195H611V1Z" stroke="#0075FF" stroke-opacity="0.8" stroke-width="2"/>
        </SquareSvg>      
    )
}

const SquareSvg = styled.svg`
    position: absolute;
    left: 18%;
    z-index: 2;
`

export default Square;