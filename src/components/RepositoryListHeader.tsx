import Octicon, { TriangleDown, TriangleUp } from "@primer/octicons-react";
import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";

import { SortOptions } from "../stores/RespositoryStore";
import { observer } from "mobx-react";
import useStores from "../useStores";

interface RepositoryListHeaderProps {
  name: string;
}

const RepositoryListHeader: FunctionComponent<RepositoryListHeaderProps> = observer(
  ({ name }) => {
    const { repositoryStore } = useStores();

    const onClick = () => {
      if (repositoryStore.activeSort !== name) {
        repositoryStore.changeActiveSort(name);
      } else {
        repositoryStore.changeActiveSortOption();
      }
    };

    return (
      <Container onClick={onClick}>
        <span>{name}:</span>
        <Icons>
          <IconUp
            active={
              repositoryStore.activeSort === name &&
              repositoryStore.activeSortOption === SortOptions.descending
            }
          >
            <Octicon icon={TriangleUp} size={14} />
          </IconUp>
          <IconDown
            active={
              repositoryStore.activeSort === name &&
              repositoryStore.activeSortOption === SortOptions.ascending
            }
          >
            <Octicon icon={TriangleDown} size={14} />
          </IconDown>
        </Icons>
      </Container>
    );
  }
);

export default RepositoryListHeader;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 1;

  & > * {
    cursor: pointer;
  }

  & span {
    padding-right: 5px;
  }
`;

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2em;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.secondaryColor};
  color: ${props => props.theme.colors.primaryTextColor};
`;

interface IconProps {
  active?: boolean;
}

const IconUp = styled.div<IconProps>`
  color: ${props => props.theme.colors.secondaryColor};
  & svg {
    position: relative;
    top: 2px;
  }
  ${props =>
    props.active &&
    css`
      color: ${props => props.theme.colors.primaryTextColor};
    `}
`;

const IconDown = styled.div<IconProps>`
  color: ${props => props.theme.colors.secondaryColor};
  & svg {
    position: relative;
    bottom: 2px;
  }
  ${props =>
    props.active &&
    css`
      color: ${props => props.theme.colors.primaryTextColor};
    `}
`;
