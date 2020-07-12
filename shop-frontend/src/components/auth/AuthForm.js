import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const AuthFormBlock= styled.div`
    padding:20px;
    h3{
        margin-left:16px;
        margin-bottom:16px;
        color:${palette.gray[8]};
    }
   form{ 
    display:flex;
    flex-direction:column;
   }
`;

const StyledInput= styled.input`
    width:100%;
    padding:8px 16px;
    margin-top:0.5rem;
    border:none;
    outline:none;
    color:${palette.gray[9]};
    background:${palette.red[1]};
    border-bottom:1px solid ${palette.gray[5]};
    padding-bottom:0.5rem;
    &:focus{
        border-bottom:1px solid ${palette.gray[7]};
    }
`;

const AuthForm = ()=>{
    return(
        <AuthFormBlock>
            <h3>로그인</h3>
            <form>
                <StyledInput autoComplate="uesrname" name="username" placeholder="아이디" />
                <StyledInput autoComplate="new-password" name="password" placeholder="비밀번호" type="password" />
                <Button>로그인</Button>
            </form>
        </AuthFormBlock>
    );
};


export default AuthForm
