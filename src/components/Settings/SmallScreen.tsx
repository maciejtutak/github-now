import React, { MouseEvent, useState } from "react";

import { ReactComponent as Close } from "../../assets/close.svg";
import LanguageSelect from "./LanguageSelect";
import { ReactComponent as Settings } from "../../assets/settings.svg";
import ThemeToggle from "../ThemeToggle";
import TimeSpanForm from "./TimeSpanForm";
import { observer } from "mobx-react";
import styled from "styled-components";

const SmallScreen = observer(() => {
  const [open, setOpen] = useState<boolean>(false);

  const show = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(true);
    document.body.style.position = "fixed";
  };

  const hide = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(false);
    document.body.style.position = "static";
  };

  return (
    <Container>
      <Button type="button" onClick={show}>
        <Settings width={20} height={20} />
      </Button>
      <SmallScreenOverlay open={open} />
      <SmallScreenModal open={open}>
        <Button type="button" onClick={hide}>
          <Close width={20} height={20} />
        </Button>
        <OptionsContainer>
          <TimeSpanForm />
          <LanguageSelect />
          <ThemeToggle />
        </OptionsContainer>
      </SmallScreenModal>
    </Container>
  );
});

const Container = styled.div`
  @media all and (min-width: 769px) {
    display: none;
  }
`;

interface SmallScreenOverlayProps {
  open: boolean;
}

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Button = styled.button`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
  width: 34px;
  height: 34px;

  &:hover {
    background-color: ${props => props.theme.colors.secondaryColor};
  }
  color: ${props =>  props.theme.colors.primaryTextColor};
  
  & > svg {
    margin: auto;
  }

  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.secondaryColor};
`;


const SmallScreenOverlay = styled.div<SmallScreenOverlayProps>`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  width: 100%;
  height: 100vh;
  background-color: #80808080;
  overflow: hidden;
  display: ${props => (props.open === true ? "block" : "none")};
`;

const SmallScreenModal = styled.div<SmallScreenOverlayProps>`
  position: fixed;
  top: 0;
  ${props => (props.open === true ? "right: 0;" : "right: -320px;")}
  width: 320px;
  height: 100%;
  z-index: 11;
  transition: right 0.2s ease-in;

  display: flex;
  flex-flow: column;
  margin: 0;
  padding: 20px;
  background-color: ${props => props.theme.colors.bgColor};
`;

export default SmallScreen;
