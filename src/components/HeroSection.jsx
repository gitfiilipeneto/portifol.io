import React from "react"
import styled from "styled-components"

// estilizar e colocar o logo

const StyledContainer = styled.div`
    
    height: 100vh;
    max-height: 100%;    
    width: 100vw;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:    center;

`

const Styledh1 = styled.h1`

    width: auto;
    font-size: 90px;
    font-weight: 600;

`

const HeroSection = () => {
    return (
        <StyledContainer>
            <Styledh1>portifol.io</Styledh1>
            <div>hero section(renderiza o logo logo mais)</div>
        </StyledContainer>
    )
}

export default HeroSection