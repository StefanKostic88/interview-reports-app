import { useState, useEffect } from "react";

const useHomePage = (list) => {
  const [filteredList, setFilteredList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const filterCandidate = (candidateName) => {
    const candidateConverted = candidateName.toLowerCase();
    const data = list.filter((candidate) =>
      candidate.name.toLowerCase().startsWith(candidateConverted)
    );
    setFilteredList(() => [...data]);
  };

  useEffect(() => {
    setFilteredList(() => [...list]);
    setIsLoading(() => false);
  }, [list]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(() => false);
    }, 500);
    return () => {
      clearTimeout(timer);
      setIsLoading(() => true);
    };
  }, [filteredList]);

  return {
    filteredList,
    isLoading,
    filterCandidate,
  };
};
export default useHomePage;
