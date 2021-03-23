import React, { Component } from 'react'
import styled from 'styled-components'
import { IconWrapper, StyledFacebook, StyledGithub, StyledLinkedin } from '../support/DefaultImages'
import Container from '../style/DefaultContainer'
import InputField from '../components/DefaultInputField'
import Button from '../components/ButtonDefault'
import user from '../images/user.svg'


const StyledContainer = Container

const StyledDiv = styled.div`
    width: auto;
    height: 60vh;
    margin: 5px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & h3{
        font-weight: 400;
    }
    & h4{
        font-weight: 300;
    }
`

class Register extends Component {
    render() {
        return (
            <StyledContainer>
                <StyledDiv>
                    <h3>Registre-se agora</h3>

                    <InputField type="text" placeholder="Nome completo" />
                    <InputField type="text" placeholder="Email" />
                    <InputField type="text" placeholder="Senha" />

                    <Button>Registrar</Button>
                    <h4>
                        Ou Registre-se com:
                    </h4>

                    <IconWrapper>

                        <StyledLinkedin />
                        <StyledFacebook />
                        <StyledGithub />

                    </IconWrapper>


                </StyledDiv>


            </StyledContainer>
        )
    }
}

export default Register