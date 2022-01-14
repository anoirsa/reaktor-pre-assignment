import React from 'react'
import { HeaderContainer, ReaktorImage } from './HeaderSC'
import Contact from './icons/Contact';
import DevIcon from './icons/DevIcon';
import ReaktorIcon from '../../images/reaktorIcon.jpeg';

const Header = () => {
    return (
        <HeaderContainer>
            <DevIcon />
            <ReaktorImage src={ReaktorIcon} />
            <Contact />
        </HeaderContainer>
    )
}

export default Header
