import React from 'react'

import styled from 'styled-components'

import linkedin from '../images/linkedin.png'

import instagram from '../images/instagram.png'

const StyledContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

`

const Img = styled.img`
    background-size: cover; 
    width: 70px; 
    height: 70px;
    margin: 30px;
`

const ContactInfo = () => {
    return(
        <StyledContainer>
            
            <a href = "https://www.linkedin.com/company/portifol-io/"><Img src = {linkedin} /> </a>
            
            <a href = "https://www.instagram.com/portifol.io/"> <Img src = {instagram} /> </a>

        </StyledContainer>            
    )
}

export default ContactInfo