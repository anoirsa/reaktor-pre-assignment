

import React from 'react'
import { ButtonContainer } from './ButtonSC'

const Button = ({children, whiteBackground = false, onClick, gameHistorical}) => {
    return (
        <ButtonContainer 
            onClick={onClick}
            whiteBackground={whiteBackground}
            gameHistorical={gameHistorical}
        >
            {children}
        </ButtonContainer>
    )
}

export default Button
