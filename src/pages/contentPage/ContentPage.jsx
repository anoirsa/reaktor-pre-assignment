import React, {useEffect} from 'react'
import {ContentContainer, TitleSection, StartingGamesSection, Wrapper} from './ContentPageSC.jsx'
import useApi from './useApi.js'
import {motion} from 'framer-motion';

const ContentPage = () => {
    const {endingGames} = useApi();
   
    return (
        <ContentContainer>
            <TitleSection>
                <h3>Reaktor live game update</h3>
                <p>Made by software developer <span>Anouar Belila</span></p>
            </TitleSection>
            <StartingGamesSection>
                <Wrapper>
                   {/**  
                  {liveData.map((value, index) => {
                      return <motion.p
                            initial={{x : - 10, opacity:0}}
                            animate={{x : 10, opacity:1}}
                            transition={{duration: 1}}

                      key={index}>Data</motion.p>
                  })} */} 
                </Wrapper>
            </StartingGamesSection>
            
        </ContentContainer>
    )
}

export default ContentPage
