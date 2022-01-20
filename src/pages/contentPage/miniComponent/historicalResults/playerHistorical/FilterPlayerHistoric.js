import { mode } from "../../../../../globals/Functions";
import { defineWinner } from "../../TieWin";

const filterPlayerHistoric = (data) => {
  let playerSaver = [];
  let returnedArray = [];
  data.forEach((g) => {
    let playerStatistics = { name: "", gamesPlayed: 0, wins: 0 };
    let playedhand = [];
    let found = false;
    if (!playerSaver.includes(g.playerA.name)) {
      playerStatistics.name = g.playerA.name;
      found = true;
      playerSaver.push(g.playerA.name);
      data.forEach((gi) => {
        if (gi.playerA.name === g.playerA.name) {
          playedhand.push(gi.playerA.played);
          playerStatistics.gamesPlayed++;
          if (defineWinner(gi.playerA.played, gi.playerB.played).winner)
            playerStatistics.wins++;
        } else if (gi.playerA.name === g.playerB.name) {
          playedhand.push(gi.playerA.played);
          playerStatistics.gamesPlayed++;
          if (defineWinner(gi.playerB.played, gi.playerA.played).winner)
            playerStatistics.wins++;
        }
      });
    } else if (!playerSaver.includes(g.playerB.name)) {
      found = true;
      playerStatistics.name = g.playerB.name;
      playerSaver.push(g.playerB.name);
      data.forEach((gi) => {
        if (g.playerB.name === gi.playerB.name) {
          playedhand.push(gi.playerB.played);
          playerStatistics.gamesPlayed++;
          if (defineWinner(gi.playerB.played, gi.playerA.played).winner)
            playerStatistics.wins++;
        } else if (g.playerB.name === gi.playerA.name) {
          playedhand.push(gi.playerA.played);
          playerStatistics.gamesPlayed++;
          if (defineWinner(gi.playerA.played, gi.playerB.played).winner)
            playerStatistics.wins++;
        }
      });
    }
    if (found) {
      playerStatistics.mostPlayedHand = mode(playedhand);
      returnedArray.push(playerStatistics);
    }
  });
  returnedArray.sort((a, b) => a.name.localeCompare(b.name));
  return returnedArray;
};

export default filterPlayerHistoric;
