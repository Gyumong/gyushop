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

   footer{
       display:flex;
       justify-content:flex-end;
       align-items:center;

       a{
           margin-top:1rem;
           color:${palette.gray[9]};
           text-decoration:underline;
       }
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

const textMap= {
    login:'로그인',
    register:'회원가입',
};


const AuthForm = ({type,form,onChange,onSubmit})=>{
    const text= textMap[type];
    return(
        <AuthFormBlock>
            <h3>{text}</h3>
            <form onSubmit={onSubmit}>
                <StyledInput autoComplate="uesrname" name="username" placeholder="아이디" onChange={onChange} value={form.username}/>
                <StyledInput autoComplate="new-password" name="password" placeholder="비밀번호" type="password" onChange={onChange} value={form.password}/>
                {type ==='register' &&(
                    <StyledInput 
                        autoComplete="new-password"
                        name="passwordConfirm"
                        placeholder="비밀번호 확인"
                        type="password"
                        onChange={onChange}
                        value={form.passwordConfirm}
                        />
                )}
                <Button fullWidth>{text}</Button>
            </form>
            <footer>
                {type==='login'?(
                    <Link to ="/register">회원가입</Link>
                    ):(
                        <Link to="/login">로그인</Link>
                    )}
            </footer>
        </AuthFormBlock>
    );
};


export default AuthForm
