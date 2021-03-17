import React from 'react'
import styled from 'styled-components'

import {BLUE} from '../support/colors'


const InputField = styled.input`
    width: 200px;
    height: 35px;
    margin: 5px;
    text-align: center;
    text-decoration: none;
    border-radius: 60px;
    border: 2px ${BLUE} solid;
`

export default InputField