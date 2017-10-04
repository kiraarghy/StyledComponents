import styled, { keyframes, css } from "styled-components";

export const Rotate = keyframes`
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
`;

export const uc = css`text-transform: uppercase;`;

export const Wrapper = styled.div`
  text-align: center;
  background-color: red;
`;

export const Logo = styled.img`
  animation: ${Rotate} infinite ${props => props.speed} linear;
  height: 80px;
`;

export const Header = styled.header`
  ${uc};
  background-color: #222;
  padding: 20px;
  color: white;
`;

export const Title = styled.h1`font-size: 1.5em;`;

export const Intro = styled.p`font-size: large;`;

export const Input = styled.input`
  border: 2px solid ${({ error }) => (error ? "red" : "white")};
`;
