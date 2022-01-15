import { useState, useEffect } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import _ from "lodash";
import hResultsClient from "./clinetApi";
import { ENDPOINTS } from "../../globals/Variables";

const { SOCKET_API, REST_API } = ENDPOINTS;
const webSocketClient = new W3CWebSocket(SOCKET_API);

const useApi = () => {
  const [startingGames, setStartingGames] = useState([]);
  const [endingGames, setEndingGames] = useState([]);
  const [count, setCount] = useState(0);
  const [historicalResults, setHistoricalResults] = useState([]);
  useEffect(() => {
    webSocketClient.onopen = () => {
      console.log("WebScoket client is open");
    };
    webSocketClient.onmessage = (message) => {
      const currentGame = JSON.parse(JSON.parse(message.data));
      if (currentGame.type === "GAME_RESULT") {
        const didGameEnded = _.find(
          startingGames,
          (g) => g.gameId === currentGame.gameId
        );
        if (didGameEnded)
          setStartingGames((current) =>
            _.filter(current, (g) => g.gameId !== currentGame.gameId)
          );
        setEndingGames((current) => [...current, currentGame]);
      } else {
        setStartingGames((current) => [...current, currentGame]);
      }
      setCount((current) => current + 1);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  useEffect(() => {
    hResultsClient.get(REST_API).then((res) => {
      const newUpdatedData = res.data.data;
      setHistoricalResults(newUpdatedData);
      for (let i in endingGames) {
        const gameExists = _.find(
          newUpdatedData,
          (g) => g.gameId === endingGames[i].gameId
        );
        if (gameExists)
          setEndingGames((current) =>
            _.filter(current, (g) => g.gameId !== gameExists.gameId)
          );
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endingGames]);

  return { startingGames, endingGames, historicalResults };
};

export default useApi;
