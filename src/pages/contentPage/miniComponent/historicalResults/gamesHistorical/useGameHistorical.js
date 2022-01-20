import { useState, useEffect } from "react";

export const useGameHistorical = ({ historicalGames }) => {
  const [indexPages, setIndexPages] = useState({ min: 0, max: 8 });
  const [allRows, setAllRows] = useState([]);
  const handleIndexPages = (direction) => {
    if (direction === "next")
      setIndexPages((current) => {
        return { min: current.min + 8, max: current.max + 8 };
      });
    else if (direction === "previous")
      setIndexPages((current) => {
        return { min: current.min - 8, max: current.max - 8 };
      });
  };

  useEffect(() => {
    const sortedResults = [...historicalGames].sort((a, b) => b.t - a.t);
    setAllRows(sortedResults);
  }, [historicalGames]);

  return { indexPages, handleIndexPages, allRows };
};

export default useGameHistorical;
