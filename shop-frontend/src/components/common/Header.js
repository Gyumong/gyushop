import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import {Link} from 'react-router-dom';
const HeaderBlock = styled.div`
    position:fixed;
    z-index:5;
    margin-bottom:4rem;
    top:0;
    left:0;
    right:0;
    background:#fff;
    box-shadow:0px 2px 4px rgba(0,0,0,0.08);
    height: 75px;
    padding:1rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

const Spacer = styled.div`
    height:4rem;
`;

const UserInfo = styled.div`
    font-weight:700;
    margin-right:1rem;
`;

const Header = ({user, onLogout})=>{
    return (
        <>
            <HeaderBlock>

                    <Link to ="/">GyuShop</Link>
                    {user ? (
                        <div className="right">
                        <UserInfo>{user.username}</UserInfo>
                        <Button onClick={onLogout}>로그아웃</Button>
                    </div>
                    ):(
                        <div className="right">
                        <Button to="/login">로그인</Button>
                        </div>

                    )}

            </HeaderBlock>

        </>
    );
};

export default Header;