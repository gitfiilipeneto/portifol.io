import React, { Component } from 'react'
import styled from 'styled-components'
import Container from '../style/DefaultContainer'

const StyledContainer = styled(Container)`
    background-color: lightblue;

`

const StyledDiv = styled.div`
    width: 40vw;
    height: 60vh;
    margin: 5px;
    border: 1px black solid;
    display:flex;
    justify-content: center;
    align-items: center;
`

const LoginOrRegister = () => {
    return (
        <StyledContainer>
            <StyledDiv>
                register fields
            </StyledDiv>

            <StyledDiv>
                login fields
            </StyledDiv>


        </StyledContainer>
    )
}

export default LoginOrRegister