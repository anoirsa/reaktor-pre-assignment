import React, { useState , useEffect} from "react";
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
import ArrowRight from "../../images/svgicons/rightArrow.svg";
import { GET_ICON } from "../../globals/Variables.js";
import { defineWinner } from "./miniComponent/TieWin.jsx";
import Button from "../../components/customs/button/Button.jsx";
import HistoricalResults from "./miniComponent/historicalResults/HistoricalResults.jsx";


const ContentPage = () => {
  const { endingGames, startingGames, historicalResults} = useApi();
  const [minMaxShow, setMinMaxShow] = useState({ minShow: 0, maxShow: 4 });
  const [showModal, setShowModal] = useState(false);


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
  useEffect(() => {
    if (startingGames.length <= 5) 
    setMinMaxShow({minShow: 0, maxShow: 4})
    
  }, [startingGames.length])
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
          {minMaxShow.minShow > 0 && startingGames.length > 5 && (
            <SliderArrow onClick={() => handleSlider("left")}>
              <i className="fas fa-arrow-left" />
            </SliderArrow>
          )}

          {startingGames.map((value, index) => {
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
          {startingGames.length > minMaxShow.maxShow + 1 && (
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
      <Button
        onClick={() => setShowModal(true)}
      >
        VIEW HISTORICAL RESULTS
      </Button>
      {showModal && 
      <HistoricalResults historicalGames={historicalResults} setShowModal={setShowModal}/>
       }
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


