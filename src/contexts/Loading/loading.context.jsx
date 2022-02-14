import React, { createContext, useContext, useState } from 'react';

//Context
const LoadingContext = createContext({});
//Provider
const LoadingProvider = ({ children }) => {
  const [loadingState, setState] = useState({ display: 'none' });
  const toggleLoading = (payload) => setState({ ...payload, display: 'block' });
  const untoggleLoading = (payload) => setState({ ...payload, display: 'none' });
  return <LoadingContext.Provider value={{ loadingState, toggleLoading, untoggleLoading }}>{children}</LoadingContext.Provider>;
};
//Hook
const useLoadingContext = () => {
  const context = useContext(LoadingContext);
  return context;
};

export { LoadingContext, useLoadingContext, LoadingProvider };
