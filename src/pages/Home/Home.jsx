import React from 'react';

import { useQuotes } from '../../store/quotes';
import Header from '../../components/Header/Header';

const Home = () => {
  const { fetchQuoteValue } = useQuotes();

  React.useEffect(() => {
    fetchQuoteValue();
  });

  return (
    <div>
      <Header/>

    </div>
  );
};

export default Home;
