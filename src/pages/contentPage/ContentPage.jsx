import React, { useState } from "react";
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
  SliderArrow,
} from "./ContentPageSC.jsx";
import useApi from "./useApi.js";
import { motion } from "framer-motion";
import ArrowRight from "../../images/svgicons/rightArrow.svg";
import { GET_ICON } from "../../globals/Variables.js";
import { defineWinner } from "./miniComponent/TieWin.jsx";

// Try in
const valueExampleI = {
  playerA: {
    name: "sonon",
  },
  playerB: {
    name: "Konon",
  },
  gameId: "212123",
};
const valueExampleII = {
  playerA: {
    name: "piton",
  },
  playerB: {
    name: "Kodsnon",
  },
  gameId: "434343",
};
const valueExampleIII = {
  playerA: {
    name: "FDFD",
  },
  playerB: {
    name: "FDGERRFRE",
  },
  gameId: "3234",
};
const valueExampleIV = {
  playerA: {
    name: "ANOUAR",
  },
  playerB: {
    name: "MAHDI",
  },
  gameId: "954545",
};
const valueExampleVI = {
  playerA: {
    name: "arbive",
  },
  playerB: {
    name: "solki",
  },
  gameId: "9545454",
};
const exampleStarting = [
  valueExampleI,
  valueExampleII,
  valueExampleIII,
  valueExampleVI,
  valueExampleIV,
];

//

const ContentPage = () => {
  const { endingGames, startingGames } = useApi();
  const [minMaxShow, setMinMaxShow] = useState({ minShow: 0, maxShow: 2 });

  const handleSlider = (direction) => {
    if (direction === "right")
      setMinMaxShow((current) => {
        return { minShow: current.minShow + 1, maxShow: current.maxShow + 1 };
      });
    else if (direction === "left") {
      setMinMaxShow((current) => {
        return { minShow: current.minShow - 1, maxShow: current.maxShow - 1 };
      });
    }
  };

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
          {minMaxShow.minShow > 0 && exampleStarting.length > 3 && (
            <SliderArrow onClick={() => handleSlider("left")}>
              <i className="fas fa-arrow-left" />
            </SliderArrow>
          )}

          {exampleStarting.map((value, index) => {
            const { minShow, maxShow } = minMaxShow;
            if (index >= minShow && index <= maxShow)
              return (
                <BeginBox
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  key={index}
                >
                  <div className="player--div">
                    <p>{value.playerA.name}</p>
                  </div>
                  <h6>Vs</h6>
                  <div className="player--div">
                    <p>{value.playerB.name}</p>
                  </div>
                  <p className="game--id">T: {value.gameId}</p>
                </BeginBox>
              );
            else return null;
          })}
          {exampleStarting.length > minMaxShow.maxShow + 1 && (
            <SliderArrow onClick={() => handleSlider("right")}>
              <i className="fas fa-arrow-right" />
            </SliderArrow>
          )}
        </Wrapper>
      </GamesSection>
      <GamesTitle>
        <ArrowDirect />
        <h4>ENDING GAMES</h4>
      </GamesTitle>
      <GamesSection>
        <Wrapper>
          {endingGames.map((value, index) => {
            return (
              <EndBox
                key={value.gameId}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="play--section">
                  <div className="player--name">
                    <p>{value.playerA.name}</p>
                  </div>
                  <PlayedIcon src={GET_ICON[value.playerA.played]} />
                  {defineWinner(
                    value.playerA.played,
                    value.playerB.played
                  ).resultIcon()}
                </div>

                <div className="play--section">
                  <div className="player--name">
                    <p>{value.playerB.name}</p>
                  </div>
                  <PlayedIcon src={GET_ICON[value.playerB.played]} />
                  {defineWinner(
                    value.playerB.played,
                    value.playerA.played
                  ).resultIcon()}
                </div>
                <p className="game--id">T: {value.gameId}</p>
              </EndBox>
            );
          })}
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

/**
gameId: "c6a8e6ab884987336c"
playerA: {name: 'Kokko Jokinen', played: 'SCISSORS'}
playerB: {name: 'Mielikki Hämäläinen', played: 'SCISSORS'}
t: 1642287119557
type: "GAME_RESULT"
 */
// minMaxShow.maxShow >= 2 && exampleStarting.length > 3

/**
 const handleSlider = (direction) => {
    if (direction === "right") {
      if (exampleStarting.length > minMaxShow.maxShow + 1) {
        setMinMaxShow((current) => {
          return { minShow: current.minShow + 1, maxShow: current.maxShow + 1 };
        });
      }
    } else if (direction === "left") {
      if (minMaxShow.minShow > 0) {
        setMinMaxShow((current) => {
          return { minShow: current.minShow - 1, maxShow: current.maxShow - 1};
        });
      }
    }
  };
 */
