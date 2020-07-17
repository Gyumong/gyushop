import React from 'react';
import styled,{css} from 'styled-components';
import palette from '../../lib/styles/palette';
import {Link} from 'react-router-dom';

const buttonStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    color:#fff;
    border: none;
    padding:0 1rem;
    border-radius: 3px;
    font-size: 11px;
    font-weight: 400;
    line-height: 20px;
    outline:none;
    cursor:pointer;

    background:${palette.gray[9]};

    &:hover{
        
        opacity: 0.5;
    }

    ${props =>
        props.fullWidth &&
        css`
            margin-top:2rem;
            padding-top:0.75rem;
            padding-bottom:0.75rem;
            width:100%;
            font-size:1.125rem;
        `}
`;
const StyledButton = styled.button`
    ${buttonStyle}
`;

const StyledLink = styled(Link)`
    ${buttonStyle}
`;
const Button = props => {
    return props.to ?(
        <StyledLink {...props} gray={props.gray ? 1: 0} />
    ):(
        <StyledButton {...props} />
    );
};

export default Button;