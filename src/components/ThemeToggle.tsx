import { ReactComponent as Moon } from "../assets/moon.svg";
import React from "react";
import styled from "styled-components";
import useStores from "../useStores";

function ThemeToggle() {
  const { themeStore } = useStores();
  return (
    <Container>
      <span>Appearance:</span>
      <input
        id="themeToggle"
        type="checkbox"
        onClick={themeStore.changeTheme}
      />
      <Label htmlFor="themeToggle">
        <Moon width={20} height={20} />
      </Label>
    </Container>
  );
}

export default ThemeToggle;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media all and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
  
  & span {
    margin-right: 0.6em;
    @media all and (max-width: 768px) {
      margin: 10px 0 5px 0;
    }
  }

  & input[type="checkbox"] {
    display: none;
  }
`;

const Label = styled.label`
  content: "";
  display: inline-flex;
  cursor: pointer;

  height: 34px;
  width: 34px;

  &:hover {
    background-color: ${props => props.theme.colors.secondaryColor};
  }

  & > svg {
    margin: auto;
    align-self: center;
  }

  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.secondaryColor};
`;
