import React, { Component } from 'react'
import styled from 'styled-components'
import Container from '../style/DefaultContainer'
import InputField from '../components/DefaultInputField'
import Button from '../components/ButtonDefault'
import user from '../images/user.svg'


const StyledContainer = styled(Container)`
    // background-color: lightblue;

`

const StyledDiv = styled.div`
    width: 40vw;
    height: 60vh;
    margin: 5px;
    // border: 1px black solid;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
class Login extends Component{
    render(){
        return(

            <StyledContainer >

            <StyledDiv>
                <h4>Faça seu Login</h4>
                <div>
                    <img src={user}></img>
                    <img src={user}></img>
                    <img src={user}></img>
                </div>

                <InputField type="text" placeholder="Email" />
                <InputField type="text" placeholder="Senha" />

                <Button>Login</Button>

            </StyledDiv>


            </StyledContainer >
        )
    }
}


export default Login