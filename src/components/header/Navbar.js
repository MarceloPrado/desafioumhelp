import React from 'react';

import { Container, Home } from './styled';

export default function Header() {
  return (
    <Container>
      <Home to="/">
        <label htmlFor="nome">
          Search:
          <input type="text" placeholder="Search" name="search" />
          <button type="submit">Enviar</button>
        </label>
      </Home>
    </Container>
  );
}
