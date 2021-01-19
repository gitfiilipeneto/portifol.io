import styled from 'styled-components'

const Container = styled.div`
height: 100vh;
max-height: 100%;    
width: 100vw;
max-width: 100%;
display: flex;
flex-direction:${props => props.default? "column" : "row"};
justify-content: center;
align-items: center;
`

export{
    Container
}