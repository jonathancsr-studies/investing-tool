import React from 'react';

import {
  Container, Title, Order, Button,
} from './style';

const HomeOptions = ({ handleOrder, order }) => (
    <Container>
      <Title>Explore o mercado</Title>
      <Order>
        <p>Ordenar:</p>
        <Button selected={order === 'alta'} onClick={handleOrder('alta')}>Em Alta</Button>
        <Button selected={order === 'baixa'} onClick={handleOrder('baixa')}>Em Baixa</Button>
      </Order>
    </Container>
);

export default HomeOptions;
