import React from "react"
import styled from "styled-components"

import logo from "../images/logo-reformulado.png"



const StyledContainer = styled.div`
    
    // position:relative;
    height: 100vh;
    max-height: 100%;    
    width: 100vw;
    max-width: 100%;
         
`

const StyledHero = styled.div`
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    max-height: 100%;
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;

    background-image: url(${logo});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: right;


    @media (max-width: 765px){

        display: flex;
        justify-content: center;
        items-align: center;
        background-position: left top;
            
    }
`

const StyledDiv = styled.div`

    width: 650px;
    height: auto;
    text-align: justify;
    @media (max-width: 765px){
        justify-content: center;
        content-align: center;
        text-align: center;
        padding: 10px;
        & p {
            
        }
    }
 
    
`

const Styledh1 = styled.h1`

    font-size: 96px;
    font-weight: 500;
    @media (max-width: 765px){
        font-size: 40px;
    }
`


const StyledText = styled.p`

    font-size: 36px;
    font-weight: 200;
    @media (max-width: 765px){
        font-size: 20px;
        font-weight: 350;
    }
`

const HeroSection = () => {
    return (
        <StyledContainer>
            <StyledHero>
                <StyledDiv>
                    <Styledh1>portifol.io</Styledh1>
                    <StyledText>Revolucione agora a forma como você monta e contrata equipes!</StyledText>
                </StyledDiv>
            </StyledHero>    
        </StyledContainer>
    )
}

export default HeroSection