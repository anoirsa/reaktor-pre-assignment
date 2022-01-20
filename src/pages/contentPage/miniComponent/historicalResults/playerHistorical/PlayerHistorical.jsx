import React from "react";
import { GET_ICON } from "../../../../../globals/Variables";
import {
  CellData,
  GameHistoricalContainer,
  RowData,
  PlayedIcon,
  LastButtonSection,
  SliderArrow,
} from "../HistoricalResultsSC";
import { PLAYER_HEADERS } from "../TableHeaders";
import usePlayerHistorical from "./usePlayerHistorical";

const PlayerHistorical = ({ historicalGames }) => {
  const { allRows, indexPages, handleIndexPages } = usePlayerHistorical({
    historicalGames,
  });
  return (
    <GameHistoricalContainer>
      <RowData>
        {PLAYER_HEADERS.map(({ label, myWidth, lastCell }, index) => {
          return (
            <CellData key={index} myWidth={myWidth} lastCell={lastCell}>
              <p>{label} </p>
            </CellData>
          );
        })}
      </RowData>

      {allRows.map((row, index) => {
        const { min, max } = indexPages;
        if (index >= min && index <= max)
          return (
            <RowData key={index}>
              <CellData myWidth="24%">
                <p>{row.name}</p>
              </CellData>
              <CellData myWidth="22%">
                <p>{row.gamesPlayed}</p>
              </CellData>
              <CellData choiceB myWidth="16%">
                <p>{row.wins}</p>
              </CellData>
              <CellData myWidth="22%" lastCell>
                <PlayedIcon src={GET_ICON[row.mostPlayedHand]} />
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

export default PlayerHistorical;
