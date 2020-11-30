import React, {
  createContext, useState, useContext,
} from 'react';

const QuotesContext = createContext({});

const initialState = {
  quotes: [],
};

export const QuotesProvider = ({ children }) => {
  const [data, setData] = useState(initialState);

  return (
    <>
      <QuotesContext.Provider value={{ quotes: data.quotes }}>
        {children}
      </QuotesContext.Provider>
    </>
  );
};

export function useQuotes() {
  const context = useContext(QuotesContext);

  return context;
}
