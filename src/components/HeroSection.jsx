import React from "react"
import styled from "styled-components"

import logo from "../images/logo-reformulado.png"

// estilizar e colocar o logo

const StyledContainer = styled.div`
    
    height: 100vh;
    max-height: 100%;    
    width: 100vw;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:    center;

    background-image: url(${logo});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: right;
    
`

const StyledImg = styled.img`
    
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: right;

`

const StyledDiv = styled.div`

    width: 650px;
    height: auto;
    text-align: justify;
    position: absolute;
    left: 550px;
    top: 320px;
`

const Styledh1 = styled.h1`

    font-size: 96px;
    font-weight: 500;
`


const StyledText = styled.p`

    font-size: 36px;
    font-weight: 200;
`

const HeroSection = () => {
    return (
        <StyledContainer>
            <StyledImg/>
            <StyledDiv>
                <Styledh1>portifol.io</Styledh1>
                <StyledText>Revolucione agora a forma como você monta e contrata equipes!</StyledText>
            </StyledDiv>    
        </StyledContainer>
    )
}

export default HeroSection