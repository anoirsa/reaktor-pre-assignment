import React, { useState } from "react";
import Button from "../../../../components/customs/button/Button";
import GamesHistorical from "./gamesHistorical/GamesHistorical";
import {
  ModalContainer,
  ModalWrapper,
  BoxTable,
  ButtonSection,
  RowsSection,
} from "./HistoricalResultsSC";
import PlayerHistorical from "./playerHistorical/PlayerHistorical";

const HistoricalResults = ({ historicalGames, setShowModal }) => {
  const [gameHistorical, setGameHistorical] = useState(true);
  return (
    <ModalContainer>
      <ModalWrapper>
        <BoxTable>
          <i
            className="icon fas fa-times"
            onClick={() => setShowModal(false)}
          />
          <ButtonSection>
            <Button
              gameHistorical={gameHistorical}
              whiteBackground={true}
              onClick={() => setGameHistorical(true)}
            >
              BY GAME
            </Button>
            <Button
              gameHistorical={!gameHistorical}
              whiteBackground={true}
              onClick={() => setGameHistorical(false)}
            >
              BY PLAYER
            </Button>
          </ButtonSection>
          <RowsSection>
            {gameHistorical ? (
              <GamesHistorical historicalGames={historicalGames} />
            ) : (
              <PlayerHistorical historicalGames={historicalGames} />
            )}
          </RowsSection>
        </BoxTable>
      </ModalWrapper>
    </ModalContainer>
  );
};

export default HistoricalResults;
