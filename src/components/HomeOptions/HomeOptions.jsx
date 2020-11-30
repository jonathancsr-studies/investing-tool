import React from 'react';

import {
  Container, Title, Order, Button,
} from './style';

const HomeOptions = ({ handleOrder }) => (
    <Container>
      <Title>Explore o mercado</Title>
      <Order>
        <Button onClick={handleOrder('alta')}>Em Alta</Button>
        <Button onClick={handleOrder('baixa')}>Em Baixa</Button>
      </Order>
    </Container>
);

export default HomeOptions;
