import React from "react";
import styled from "styled-components";

// equivalent to ${Link}:hover
// &:hover {
//   color: hotpink;
//}

const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  button {
    flex: 1;
  }
`;

const Link = styled.a`
  transition: 1s color;

  background-color: white;
  padding: 10px;
  color: black;

  &:hover {
    color: hotpink;
  }
`;

const Navigation = ({ links }) => {
  return <Nav>{links.map(({ label }) => <Link href="#">{label}</Link>)}</Nav>;
};

export default Navigation;
