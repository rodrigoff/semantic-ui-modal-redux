import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Container>
        <Header block="true" size="huge">
          <Header.Content>semantic-ui-modal-redux</Header.Content>
          <Header.Subheader>It's alive</Header.Subheader>
        </Header>
        <div>Our content will go here.</div>
      </Container>
    );
  }
}

export default App;
