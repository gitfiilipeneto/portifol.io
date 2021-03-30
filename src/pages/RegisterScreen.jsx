import React, { useState } from 'react'
import styled from 'styled-components'
import { IconWrapper, StyledFacebook, StyledGithub, StyledLinkedin } from '../support/DefaultImages'
import Container from '../style/DefaultContainer'
import InputField from '../components/DefaultInputField'
import Button from '../components/ButtonDefault'



const StyledContainer = Container

const StyledDiv = styled.div`
    width: auto;
    // height: 60vh;
    margin: 5px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & h3{
        font-weight: 400;
        margin: 5px;
        
    }
    & h4{
        
        
        font-weight: 300;
    }
`


const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handlerSubmit = []


    return (
        <StyledContainer>
            <StyledDiv>
                <h3>Registre-se agora</h3>

                <InputField
                    placeholder="Nome completo"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <InputField
                    placeholder="Email"
                    type="text"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <InputField
                    placeholder="Senha"
                    type="text"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />

                <Button onClick={handlerSubmit}>Registrar</Button>
                <h4>Ou Registre-se com:</h4>

                <IconWrapper>

                    <StyledLinkedin />
                    <StyledFacebook />
                    <StyledGithub />

                </IconWrapper>


            </StyledDiv>


        </StyledContainer>
    )

}

export default Register