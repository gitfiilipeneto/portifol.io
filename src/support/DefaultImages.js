import styled from 'styled-components'
import { BLUE } from '../support/colors'

import { ReactComponent as Linkedin } from '../images/svgs/linkedin-logo.svg'
import { ReactComponent as  Github} from '../images/svgs/github-sign.svg'
import { ReactComponent as Facebook} from '../images/svgs/facebook.svg'
import { ReactComponent as Instagram } from '../images/svgs/instagram.svg'

const StyledDiv = styled.div`
    width: 40vw;
    height: 60vh;
    margin: 5px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const IconWrapper = styled.div`

svg {
    width: 50px;
    height: auto;
    margin: 8px 12px;
    
  }
`

const StyledLinkedin = styled(Linkedin)`
&:hover{
    fill: ${BLUE};
}
`

const StyledFacebook = styled(Facebook)`
&:hover{
    fill: ${BLUE};
}
`

const StyledGithub= styled(Github)`
&:hover{
    fill: ${BLUE};
}
`

const StyledInstagram= styled(Instagram)`
&:hover{
    fill: ${BLUE};
}
`

export {
    IconWrapper,
    StyledLinkedin,
    StyledFacebook,
    StyledGithub,
    StyledInstagram
}