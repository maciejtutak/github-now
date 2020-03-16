import { ReactComponent as Moon } from "../assets/moon.svg";
import React from "react";
import styled from "styled-components";
import useStores from "../useStores";

function ThemeToggle() {
  const { themeStore } = useStores();
  return (
    <Toggle>
      <input
        id="themeToggle"
        type="checkbox"
        onClick={themeStore.changeTheme}
      />
      <Label htmlFor="themeToggle">
        <Moon width={18} height={18} />
      </Label>
    </Toggle>
  );
}

export default ThemeToggle;

const Toggle = styled.div`
  & input[type="checkbox"] {
    opacity: 0;
  }
`;

const Label = styled.label`
  content: "";
  display: inline-flex;
  cursor: pointer;

  height: 34px;
  width: 34px;

  & > svg {
    margin: auto;
    align-self: center;
  }

  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.secondaryColor};
`;

// const MoonStyled = styled.Moon`
// `;
