import React, { useContext } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { UserContext } from '../UserContext';

const HomeScreen = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Jumbotron>
        <h1>Home Page</h1>
      </Jumbotron>
      <Container>
        <h3>User Context</h3>
        <pre>
          { JSON.stringify(user) }
        </pre>
      </Container>
    </div>
  );
}

export default HomeScreen;
