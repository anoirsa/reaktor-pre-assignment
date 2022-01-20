import { useState, useEffect } from "react";
import filterPlayerHistoric from "./FilterPlayerHistoric";

export const usePlayerHistorical = ({ historicalGames }) => {
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
    setAllRows(filterPlayerHistoric(historicalGames));
  }, [historicalGames]);

  return { indexPages, handleIndexPages, allRows };
};

export default usePlayerHistorical;
