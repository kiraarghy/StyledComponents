import React, { Component } from "react";
import logo from "./logo.svg";
import styled, { keyframes } from "styled-components";

const Rotate = keyframes`
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
`;

const Wrapper = styled.div`
  text-align: center;
  background-color: red;
`;

const Logo = styled.img`
  animation: ${Rotate} infinite ${props => props.speed} linear;
  height: 80px;
`;

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const Title = styled.h1`font-size: 1.5em;`;

const Intro = styled.p`font-size: large;`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Logo src={logo} alt="logo" speed="20s" />
          <Logo src={logo} alt="logo" speed="2s" />
          <Title>Welcome to React</Title>
        </Header>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
      </Wrapper>
    );
  }
}

export default App;
