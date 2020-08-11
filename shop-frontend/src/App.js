import React,{useState,useEffect} from 'react';
import {Route,Switch} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MovieDetail from './components/MovieDetail/MovieDetail'
import {createGlobalStyle} from 'styled-components';
import axios from 'axios';
import HeaderContainer from './containers/common/HeaderContainer';


export const GlobalStyles = createGlobalStyle`

body{
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap');
  font-family: 'Noto Sans KR', sans-serif;
}
*{
  box-sizing: border-box;
  margin:0;
}

/*Reset CSS*/
a{
  color:inherit;
  text-decoration: none;
}
button,
input,
textarea{
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
}
button:focus,
button:active,
input:focus,
input:active,
textarea:focus,
textarea:active{
  box-shadow: none;
  outline: none;
}
ul,
ol,
li{
  list-style-type: none;
  padding-left: 0;
  margin-left: 0;
}
`;

const App=()=>{
 

  return(
    <>
      <GlobalStyles/>
      <HeaderContainer/>

      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
      <Route component={LandingPage} path="/" exact/>
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={MovieDetail} path="/movie/:movieId"/>
      </div>

    </>
  );
};

export default App;