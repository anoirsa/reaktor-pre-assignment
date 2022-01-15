import React from "react";
import {
  ContentContainer,
  TitleSection,
  GamesSection,
  Wrapper,
  Icon,
  GamesTitle,
  BeginBox,
  ArrowSection,
  EndBox,
  PlayedIcon,
} from "./ContentPageSC.jsx";
import useApi from "./useApi.js";
import { motion } from "framer-motion";
import ArrowRight from "../../images/svgicons/rightArrow.svg";
import { GET_ICON } from "../../globals/Variables.js";
import { defineWinner } from "./miniComponent/TieWin.jsx";

const ContentPage = () => {
  //  const {endingGames} = useApi();

  return (
    <ContentContainer>
      <TitleSection>
        <h3>Reaktor live game update</h3>
        <p>
          Made by software developer <span>Anouar Belila</span>
        </p>
      </TitleSection>
      <GamesTitle starting={true}>
        <h4>STARTING GAMES</h4>
        <ArrowDirect />
      </GamesTitle>
      <GamesSection>
        <Wrapper>
          <BeginBox>
            <div className="player--div">
              <p>Arto virtanen</p>
            </div>
            <h6>Vs</h6>
            <div className="player--div">
              <p>Mrso viganen</p>
            </div>
            <p className="game--id">T: 2132342324</p>
          </BeginBox>
        </Wrapper>
      </GamesSection>
      <GamesTitle>
        <ArrowDirect />
        <h4>ENDING GAMES</h4>
      </GamesTitle>
      <GamesSection>
        <Wrapper>
          <EndBox>
            <div className="play--section">
              <div className="player--name">
                <p>Arto virtanen</p>
              </div>
              <PlayedIcon src={GET_ICON["PAPER"]} />
              {defineWinner("PAPER", "PAPER").resultIcon()}
            </div>

            <div className="play--section">
              <div className="player--name">
                <p>Marso viganen</p>
              </div>
              <PlayedIcon src={GET_ICON["PAPER"]} />
              {defineWinner("PAPER", "PAPER").resultIcon()}
            </div>
            <p className="game--id">T: 2132342324</p>
          </EndBox>
        </Wrapper>
      </GamesSection>
    </ContentContainer>
  );
};

const ArrowDirect = () => {
  return (
    <ArrowSection>
      <Icon src={ArrowRight} />
      <Icon src={ArrowRight} />
    </ArrowSection>
  );
};

export default ContentPage;
