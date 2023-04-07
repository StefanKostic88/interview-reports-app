import { useState, useEffect } from "react";
// import { fetchCandidatsData } from "../../services/fetchData/fehtchData";

const useRootPage = (cb) => {
  const [firstLoad, setFirstLoad] = useState(true);
  const [list, setList] = useState([]);
  const [isSubmited, setIsSubmited] = useState(false);
  const [resetInputSignal, setResetInputSignal] = useState(false);

  const registerSubmit = () => {
    setIsSubmited(() => true);
  };
  const getCandidates = async () => {
    const data = await cb();

    const dataAddedFalseIsActive = data.map((el) => ({
      ...el,
      isActive: false,
    }));
    setList(() => [...dataAddedFalseIsActive]);
  };

  const refresh = () => {
    setList(() => []);
    getCandidates();
    setResetInputSignal(() => true);
  };

  useEffect(() => {
    getCandidates();

    const timer = setTimeout(() => {
      setFirstLoad(() => false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    getCandidates();
    setIsSubmited(() => false);
  }, [isSubmited]);
  useEffect(() => {
    setResetInputSignal(() => false);
  }, [resetInputSignal]);

  return {
    list,
    resetInputSignal,
    registerSubmit,
    refresh,
    firstLoad,
  };
};

export default useRootPage;
