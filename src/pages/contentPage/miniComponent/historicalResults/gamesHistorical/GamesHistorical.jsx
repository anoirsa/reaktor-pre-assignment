import React from "react";
import { GET_ICON } from "../../../../../globals/Variables";
import { defineWinner } from "../../TieWin";
import {
  CellData,
  GameHistoricalContainer,
  RowData,
  PlayedIcon,
  LastButtonSection,
  SliderArrow,
} from "../HistoricalResultsSC";
import { GAME_HEADERS } from "../TableHeaders";
import useGameHistorical from "./useGameHistorical";

const GamesHistorical = ({ historicalGames }) => {
  const { allRows, handleIndexPages, indexPages } = useGameHistorical({
    historicalGames,
  });
  return (
    <GameHistoricalContainer>
      <RowData>
        {GAME_HEADERS.map(({ label, myWidth, lastCell }, index) => {
          return (
            <CellData key={index} myWidth={myWidth} lastCell={lastCell}>
              <p> {label} </p>
            </CellData>
          );
        })}
      </RowData>
      {allRows.map((row, index) => {
        const { min, max } = indexPages;
        if (index >= min && index <= max)
          return (
            <RowData key={index}>
              <CellData myWidth="24%">{row.gameId}</CellData>
              <CellData myWidth="22%">
                <p>{row.playerA.name}</p>
              </CellData>
              <CellData myWidth="16%">
                <PlayedIcon src={GET_ICON[row.playerA.played]} />
                {defineWinner(
                  row.playerA.played,
                  row.playerB.played
                ).resultIcon()}
              </CellData>
              <CellData choiceB myWidth="16%">
                {defineWinner(
                  row.playerB.played,
                  row.playerA.played
                ).resultIcon()}
                <PlayedIcon src={GET_ICON[row.playerB.played]} />
              </CellData>
              <CellData myWidth="22%" lastCell>
                <p>{row.playerB.name}</p>
              </CellData>
            </RowData>
          );
        else return null;
      })}
      <LastButtonSection>
        {indexPages.min > 0 && (
          <SliderArrow onClick={() => handleIndexPages("previous")}>
            <i className="fas fa-arrow-left" />
          </SliderArrow>
        )}
        {indexPages.max < allRows.length && (
          <SliderArrow onClick={() => handleIndexPages("next")}>
            <i className="fas fa-arrow-right" />
          </SliderArrow>
        )}
      </LastButtonSection>
    </GameHistoricalContainer>
  );
};

export default GamesHistorical;
