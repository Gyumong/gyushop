import React from 'react';
import styled from 'styled-components'

const MainImageBlockd=styled.div`
    background:linear-gradient(to bottom, rgba(0,0,0,0)
        39%,rgba(0,0,0,0)
        41%,rgba(0,0,0,0.65)
        100%),
    url('${props=>props.image}');
    width:auto;
    height:500px;
    background-position:center,center;
    position:relative;
    background-size:100%,contain;
    background-repeat:no-repeat;
`;
const ImageInfo=styled.div`
    position:absolute;
    max-width:500px;
    bottom:2rem;
    margin-left:2rem;
    h2{
        color:white;
    }
    p{
        color:white;
        font-size:1rem;
    }
`;
function MainImage(props){
    return(
        <MainImageBlockd image={props.image}>
        <ImageInfo>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </ImageInfo>
        </MainImageBlockd>
    );
}

export default MainImage;