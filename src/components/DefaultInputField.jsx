import styled from 'styled-components'

import {BLUE, WHITE} from '../support/colors'


const InputField = styled.input`
    width: 200px;
    height: 35px;
    margin: 5px;
    outline: none;
    text-align: center;
    text-decoration: none;
    background-color: ${WHITE};
    border-radius: 60px;
    border: 2px ${BLUE} solid;

`

export default InputField