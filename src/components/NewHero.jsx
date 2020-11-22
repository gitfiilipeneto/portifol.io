import React from 'react'
import styled from 'styled-components'

import logo from "../images/logo-reformulado.png"

const AnimationFadeIn = `
animation: fadeIn ease 3s;
-webkit-animation: fadeIn ease 3s;
-moz-animation: fadeIn ease 3s;
-o-animation: fadeIn ease 3s;
-ms-animation: fadeIn ease 3s;

@keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

@-moz-keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

@-o-keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

@-ms-keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}`

const StyledContainer = styled.div`
    
    position:relative;
    height: 100vh;
    max-height: 100%;    
    width: 100vw;
    max-width: 100%;
    display:flex;
    flex-direction:column;
   
    justify-content: center;
    align-items: center;

    @media (min-width: 780px){
        background-image: url(${logo});
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: right;
        ${AnimationFadeIn}
            
    }

    @media (min-width: 1441px){
        background-image: url(${logo});
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: right 25% bottom 45%;
        ${AnimationFadeIn}
        
    }
`

const HomeImg = styled.img`
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    max-height: 100%;


    @media (max-width: 779px){
        width:300px;
        height: auto;
    }

    @media (min-width: 780px){
        display: none;
    }

    ${AnimationFadeIn}
    
`

const StyledDiv = styled.div`
    width: 650px;
    height: auto;
    text-align: justify;
    margin: 10px;
    
    
    @media (max-width: 779px){
        width: auto;
        justify-content: center;
        align-content: center;
        text-align: center;
        padding: 10px;
    }
`

const DivAnimation = styled.div`
    width: auto;
    height: auto;
`

const StyledTittle = styled.h1`

    font-size: 96px;
    font-weight: 500;

    //animação
    overflow: hidden; 
    border-right: 1px solid; 
    white-space: nowrap; 
    margin: 0 auto; 
    letter-spacing: auto ;
    animation: 
      typing 2.5s steps(44, end),
      blink-caret .75s step-end infinite;
  }
  
  
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  
  
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #4BB8E6; }
  }


    @media (max-width: 765px){
        font-size: 50px;
    }
`


const StyledText = styled.p`

    font-size: 36px;
    font-weight: 200;
    @media (max-width: 765px){
        font-size: 18px;
        font-weight: 350;
    }
`


const NewHero = () => {
    return(
        <StyledContainer>
            <StyledDiv>
                <StyledTittle>
                    portifol.io
                </StyledTittle>
                <StyledText>
                    Revolucione agora a forma como você monta e contrata equipes!
                </StyledText>
            </StyledDiv>
            <HomeImg src = {logo}/>
        </StyledContainer>
    )

}

export default NewHero
