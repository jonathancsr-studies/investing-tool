import React, {
  createContext, useState, useContext,
} from 'react';

import { socket } from '../service/web-socket';

const QuotesContext = createContext({});

export const QuotesProvider = ({ children }) => {
  const [quotes, setQuotes] = useState([]);

  const fetchQuoteValue = () => {
    socket.onmessage = (message) => {
      const response = message.data;
      setQuotes([...quotes, response]);
    };
  };

  return (
    <>
      <QuotesContext.Provider value={{ quotes, fetchQuoteValue }}>
        {children}
      </QuotesContext.Provider>
    </>
  );
};

export function useQuotes() {
  const context = useContext(QuotesContext);

  return context;
}
