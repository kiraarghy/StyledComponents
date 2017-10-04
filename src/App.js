import React, { Component } from "react";

import logo from "./logo.svg";
import { Wrapper, Input, Logo, Header, Title, Intro } from "./styles";
import Navigation from './navigation';

const btns = Array.from({length: 6}, (_, i) => ({
  label: `button ${i}`
}))

console.log(btns)

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Logo src={logo} alt="logo" speed="20s" />
          <Logo src={logo} alt="logo" speed="2s" />
          <Title>Welcome to React</Title>
          <Navigation links={btns} />
          <Input placeholder="Type here" error={true} />
        </Header>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
      </Wrapper>
    );
  }
}

export default App;
