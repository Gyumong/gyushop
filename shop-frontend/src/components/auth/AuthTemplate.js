import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import {Link} from 'react-router-dom';
import { generateMedia } from "styled-media-query";
const customMedia= generateMedia({
    huge: '1440px',
    large: '1170px',
    medium: '768px',
    small: '450px',
});

const AuthTemplateBlock= styled.div`
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;


const WhiteBox= styled.div`

    width:590px;
    height:auto;
    margin:50px auto;
    background:${palette.red[1]};
    h1{
        font-weight:500;
        letter-spacing:-0.01em;
        text-align:center;
        padding:20px;
        
    }
    ${customMedia.lessThan('medium')`
        width:400px;
    `}

`;

const AuthTemplate= ({children})=>{
    return(
        <AuthTemplateBlock>
            <WhiteBox>
            <h1>Gyu shop</h1>
            {children}
            </WhiteBox>
        </AuthTemplateBlock>
    );
};

export default AuthTemplate;