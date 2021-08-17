import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Wave = () => {
    return(
        <WaveSvg width="1303" height="253" viewBox="0 0 1303 253" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
        initial={{pathLength: 0, pathOffset: 1}}
        animate={{pathLength: 1, pathOffset: 0}}
        transition={{ duration: 1}}
        d="M1.65579 45.4582C3.23569 148.433 111.429 323.328 531.562 199.105C951.695 74.8817 1218.29 97.6428 1299.08 124.551" stroke="#F1F1F1" stroke-opacity="0.2" stroke-width="2"/>
        </WaveSvg>
    );
}

const WaveSvg = styled.svg`
    position: absolute;
    left: 0;
    z-index: -3;
`

export default Wave;