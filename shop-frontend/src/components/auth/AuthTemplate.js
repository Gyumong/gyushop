import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import {Link} from 'react-router-dom';


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
    margin:50px auto;;
    background:${palette.red[1]};

    @media(max-width:768px){
        width:400px;
    }
`;

const StyledLink = styled(Link)`
        font-size:30px;
        display:flex;
        justify-content:center;
        align-items:center;
        font-weight:500;
        letter-spacing:-0.01em;
        text-align:center;
        padding:0 auto;
        margin-top:1rem;
        margin-bottom:1rem;
        
    
`;

const AuthTemplate= ({children})=>{
    return(
        <AuthTemplateBlock>
            <WhiteBox>
            <StyledLink to ="/">Gyu shop</StyledLink>
            {children}
            </WhiteBox>
        </AuthTemplateBlock>
    );
};

export default AuthTemplate;