import React from "react";
import Container from "../style/DefaultContainer";
import Button from '../components/ButtonDefault'

const pageNotFound = () => {
  return (
    <Container>
      <div>
        <h1>Página não encontrada</h1>
        <Button>HomePage</Button>
      </div>
    </Container>
  );
};

export default pageNotFound;
