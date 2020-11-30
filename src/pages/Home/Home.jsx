import React from 'react';

import { useQuotes } from '../../store/quotes';

const Home = () => {
  const { fetchQuoteValue } = useQuotes();

  React.useEffect(() => {
    fetchQuoteValue();
  });

  return (
    <div>
      <h1>Home</h1>
      <h2>Vamo la</h2>
    </div>
  );
};

export default Home;
