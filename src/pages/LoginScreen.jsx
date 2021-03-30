import React, { Component } from 'react'
import styled from 'styled-components'
import Container from '../style/DefaultContainer'
import InputField from '../components/DefaultInputField'
import Button from '../components/ButtonDefault'

import { IconWrapper, StyledFacebook, StyledGithub, StyledLinkedin } from '../support/DefaultImages'

const StyledContainer = Container

const StyledDiv = styled.div`
    width: auto;
    height: 60vh;
    margin: 5px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & h2{
        font-weight: 300;
        margin:unset;
        
    }
`
class Login extends Component {
    render() {
        return (

            <StyledContainer >

                <StyledDiv>
                    <h2>Faça seu Login</h2>
                    <IconWrapper>

                        <StyledLinkedin />
                        <StyledFacebook />
                        <StyledGithub />

                    </IconWrapper>

                    <InputField type="text" placeholder="Email" />
                    <InputField type="text" placeholder="Senha" />

                    <Button>Login</Button>

                </StyledDiv>


            </StyledContainer >
        )
    }
}


export default Login