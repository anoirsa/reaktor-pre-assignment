

import React from 'react'
import { ButtonContainer } from './ButtonSC'

const Button = ({children, whiteBackground = false, onClick}) => {
    return (
        <ButtonContainer 
            onClick={onClick}
            whiteBackground={whiteBackground}
        >
            {children}
        </ButtonContainer>
    )
}

export default Button
