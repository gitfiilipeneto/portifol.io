import React from 'react'

import styled from 'styled-components'


import { StyledLinkedin, StyledInstagram } from '../support/DefaultImages'

const StyledContainer = styled.div`
    width: 100vw;
    max-width:100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

const Img = styled.div`
    /* background-size: cover;  */
    svg {
    width: 50px;
    height: auto;
    margin: 8px 12px;
    
  }

`

const ContactInfo = () => {
    return (
        <StyledContainer>


            <a href="https://www.linkedin.com/company/portifol-io/">
                <Img>
                    <StyledLinkedin />
                </Img>
            </a>

            <a href="https://www.instagram.com/portifol.io/">
                <Img>
                    <StyledInstagram />
                </Img>
                
            </a>

        </StyledContainer>
    )
}

export default ContactInfo