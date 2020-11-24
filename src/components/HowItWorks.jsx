import React from "react"
import styled from "styled-components"

import enterprise from "../images/enterprise.svg"
import user from "../images/user.svg"
import networking from "../images/networking.svg"


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

`

const StyledCard = styled.div`
    display: flex;
    
    width:auto;
    height: auto;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: auto;
    @media(max-width: 779px){
        flex-direction:column;
    }

`
const StyledImg = styled.img`
    
    width:120px;
    height: auto;
    @media(max-width: 779px){
        width: 65px; //query small
        height: auto;
    }

`

const StyledText = styled.p`
font-size: 25px;
font-weight: 200;
width: 70vw;
height: auto;
padding: 20px;
@media (max-width: 779px){
    width: auto;
    font-size: 15px;
    font-weight: 300;
    text-align: center;
}

`

const ComoFunciona = () => {
    return(
        <StyledContainer>
            
            <StyledCard>
                <StyledImg src = {user}/>
                <StyledText>Pessoas de diversas áreas pré cadastradas na plataforma!</StyledText>
            </StyledCard>
            <StyledCard>
                <StyledImg src = {networking}/>
                <StyledText>A plataforma avalia os perfis cadastrados e possibilita a formação do melhor time.</StyledText>
            </StyledCard>
            <StyledCard>
                <StyledImg src = {enterprise}/>
                <StyledText>Empresas montam e contratam equipes para executarem tarefas.</StyledText>
            </StyledCard>
        </StyledContainer>
    )
}


export default ComoFunciona