import Octicon, { RepoForked, Star } from "@primer/octicons-react";

import React from "react";
import { observer } from "mobx-react";
import styled from "styled-components";

type ItemProps = { item: Record<string, string> };

const RepositoryItem = observer(({ item }: ItemProps) => {
  const {
    author,
    name,
    description,
    stars,
    forks,
    language,
    languageColor,
    url
  } = item;
  return (
    <ItemContainer href={url}>
      <Item>
        <IconRow>
          <Octicon icon={Star} />
          {stars}
        </IconRow>
        <IconRow>
          <Octicon icon={RepoForked} />
          {forks}
        </IconRow>
        <ItemInfo>
          <Title>
            <Name>{name}</Name> <Author>by {author}</Author>
          </Title>
          <Description>{description}</Description>
          {language && (
            <Language languageColor={languageColor}>{language}</Language>
          )}
        </ItemInfo>
      </Item>
    </ItemContainer>
  );
});

export default RepositoryItem;

const ItemContainer = styled.a`
  text-decoration: none;
  color: currentColor;
`;

const Item = styled.li`
  margin: 0;
  padding: 15px 20px;

  width: 100%;
  align-items: baseline;

  display: grid;
  grid-template-columns: 100px 100px 1fr;

  @media all and (max-width: 768px) {
    grid-template-columns: 100px 1fr;
  }

  border-bottom: 1px solid ${props => props.theme.colors.secondaryColor};

  &:hover {
    background-color: ${props => props.theme.colors.secondaryColor};
  }
`;

const IconRow = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-flow: row-nowrap;
  align-items: baseline;

  & svg {
    margin-right: 5px;
    position: relative;
    top: 2px;
  }
`;

const ItemInfo = styled.div`
  @media all and (max-width: 768px) {
    grid-column: 1 / span 2;
  }
`;

const Description = styled.p`
  width: 100%;
  display: flex;
  flex-flow: row;
  margin-bottom: 0.4em;
`;

const Title = styled.div`
  margin-bottom: 0.4em;
`;

const Name = styled.h2`
  display: inline;
`;

const Author = styled.h2`
  display: inline;
  font-size: 1.6rem;
  color: ${props => props.theme.colors.secondaryTextColor};
`;

interface LanguageProps {
  languageColor?: string;
}

const Language = styled.span<LanguageProps>`
    padding: 0.1em 0.4em;
    margin: 0;
    border-radius: 4px;
    background-color: ${props => props.languageColor}50;
`;
