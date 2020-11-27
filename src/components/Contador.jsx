import React from 'react'
import Countdown from 'react-countdown'
import styled from 'styled-components'

//estilizar mais tarde

const StyledContainer = styled.div`
    
  position:relative;
  height: 100vh;
  max-height: 100%;    
  width: 100vw;
  max-width: 100%;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  & span{
    font-size: 20px;
    font-weight: 250;
    @media(max-width: 779px){
      font-size:12px;
      font-weight: 400;

    }
  }

`

const StyledParagraph = styled.p`
  
font-size: 42px;
font-weight: 250;
@media(max-width: 779px){
  font-size:24px;
}

`

const renderer = ({ days,hours, minutes, seconds}) => {
    return(
      <div>

        <span>{days} dias </span>
        <span>{hours} horas </span>
        <span>{minutes} minutos</span>
        <span> {seconds} segundos </span>


      </div>
  
    )
  }

const Contador = () => {
    return(
    <StyledContainer>
      <StyledParagraph>Etapa de pré registro</StyledParagraph>
      <Countdown date={'2020-11-30T12:00:00'} renderer={renderer} />
    </StyledContainer>
    )

}

export default Contador
