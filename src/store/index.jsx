import React from 'react';

import { QuotesProvider } from './quotes';

const AppProvider = ({ children }) => (
    <QuotesProvider>{children}</QuotesProvider>
);

export default AppProvider;
