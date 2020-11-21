import React from "react"
import styled from "styled-components"

// recebe icones e diagrama

const StyledContainer = styled.div`
    
    height: 100vh;
    max-height: 100%;    
    width: 100vw;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`

const ComoFunciona = () => {
    return(
        <StyledContainer>
            COMO FUNCIONA EXPLANADO
        </StyledContainer>
    )
}


export default ComoFunciona