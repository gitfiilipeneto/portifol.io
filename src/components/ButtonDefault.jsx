
import {BLUE, WHITE} from '../support/colors'
import styled from 'styled-components'

const Button = styled.button`
width: 205px;
height: 37px;
outline: none;
background-color: ${BLUE};
color: white;
margin: 5px;
border-radius: 60px;
border: 1px ${BLUE} solid;
cursor: pointer;

&:hover{
    transform: scale(1.1);
    color: white;
}

`

export default Button