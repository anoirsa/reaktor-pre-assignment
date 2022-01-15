import React from "react";
import { WinnerBox, TierBox } from "./TieWinSC";

const WinBox = () => {
  return (
    <WinnerBox>
      <p>Winner</p>
    </WinnerBox>
  );
};

const TieBox = () => {
  return (
    <TierBox>
      <p>Tie</p>
    </TierBox>
  );
};

export const defineWinner = (playerChoice, opponentChoice) => {
  if (playerChoice === "PAPER") {
    switch (opponentChoice) {
      case "ROCK":
        return { tie: false, winner: true, resultIcon: () => <WinBox /> };
      case "SCISSORS":
        return { tie: false, winner: false, resultIcon: () => null };
      case "PAPER":
        return { tie: true, winner: false, resultIcon: () => <TieBox /> };

      default:
        break;
    }
  } else if (playerChoice === "SCISSORS") {
    switch (opponentChoice) {
      case "ROCK":
        return { tie: false, winner: false, resultIcon: () => null };
      case "SCISSORS":
        return { tie: true, winner: false, resultIcon: () => <TieBox /> };
      case "PAPER":
        return { tie: false, winner: true, resultIcon: () => <WinBox /> };

      default:
        break;
    }
  } else if (playerChoice === "ROCK") {
    switch (opponentChoice) {
      case "ROCK":
        return { tie: true, winner: false, resultIcon: () => <TieBox /> };
      case "SCISSORS":
        return { tie: false, winner: true, resultIcon: () => <WinBox /> };
      case "PAPER":
        return { tie: false, winner: false, resultIcon: () => null };

      default:
        break;
    }
  }
};
