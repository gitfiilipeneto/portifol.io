
import {BLUE, WHITE} from '../support/colors'
import styled from 'styled-components'

const Button = styled.button`
width: 205px;
height: 37px;
outline: none;
background-color: ${WHITE};
color: black;
margin: 5px;
border-radius: 60px;
border: 2px ${BLUE} solid;
cursor: pointer;

&:hover{
    background-color: ${BLUE}; 
    color: white;
}

`

export default Button