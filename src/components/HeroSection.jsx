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

const Styledh1 = styled.h1`

    width: 800px;
    font-size: 120px;
    font-weight: 600;

`


const StyledText = styled.p`

    width: 800px;
    font-size: 50px;
    font-weight: 0;
`

const HeroSection = () => {
    return (
        <StyledContainer>
            <div>
                <Styledh1>portifol.io</Styledh1>
                <StyledText>Revolucione agora a forma como você monta e contrata equipes!</StyledText>
            </div>    
        </StyledContainer>
    )
}

export default HeroSection