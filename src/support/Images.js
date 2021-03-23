import React from 'React'

import linkedin from '../images/svgs/linkedin-logo.svg'
import facebook from '../images/svgs/facebook.svg'
import github from '../images/svgs/github-sign.svg'
import enterprise from '../images/enterprose.svg'




export default (type) => {
    const Images = {
        
        linkedin: <img src={linkedin} alt="LinkedIn"/>,
        facebook: <img src={facebook} alt="Facebook"/>,
        github: <img src={github} alt="GitHub"/>,
        enterprise: <img src={enterprise} alt="Default"/>

    }
    return Images[type] ||  Images.enterprise
}

//funçaõ que percorre o array e retorna a imagem