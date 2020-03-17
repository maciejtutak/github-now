import LanguageSelect from "./LanguageSelect";
import React from "react";
import ThemeToggle from "../ThemeToggle";
import TimeSpanForm from "./TimeSpanForm";
import { observer } from "mobx-react";
import styled from "styled-components";

const BigScreen = observer(() => {
  return (
    <Container>
      <OptionsContainer>
        <TimeSpanForm />
        <LanguageSelect />
      </OptionsContainer>
      <ThemeToggle />
    </Container>
  );
});

export default BigScreen;

const Container = styled.div`
  padding: 10px 0;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  line-height: 1;

  @media all and (max-width: 768px) {
    display: none;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: baseline;
  justify-content: flex-start;
`;
