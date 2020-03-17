import React from "react";
import { observer } from "mobx-react";
import styled from "styled-components";
import useStores from "../../useStores";

const LanguageSelect = observer(() => {
  const { repositoryStore } = useStores();

  return (
    <Container>
      <span>Language:</span>
      <Select
        value={repositoryStore.language?.urlParam}
        onChange={repositoryStore.changeLanguage}
      >
        {repositoryStore.languages.map((lang, idx) => (
          <option value={lang.urlParam} key={idx}>
            {lang.name}
          </option>
        ))}
      </Select>
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-start;
  
  @media all and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }

  & span {
    @media all and (max-width: 768px) {
        margin: 10px 0 5px 0;
      }
  }

  & :first-child {
    margin-right: 0.6em;
  }
`;

const Select = styled.select`
  display: inline-block;
  padding: 5px 10px;
  cursor: pointer;
  color: ${props => props.theme.colors.primaryTextColor};
  width: 200px;
  height: 34px;
  border: none;
  border: 1px solid;
  border-color: ${props => props.theme.colors.secondaryColor};
  border-radius: 4px;
  appearance: none;
  background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNOTguOSwxODQuN2wxLjgsMi4xbDEzNiwxNTYuNWM0LjYsNS4zLDExLjUsOC42LDE5LjIsOC42YzcuNywwLDE0LjYtMy40LDE5LjItOC42TDQxMSwxODcuMWwyLjMtMi42ICBjMS43LTIuNSwyLjctNS41LDIuNy04LjdjMC04LjctNy40LTE1LjgtMTYuNi0xNS44djBIMTEyLjZ2MGMtOS4yLDAtMTYuNiw3LjEtMTYuNiwxNS44Qzk2LDE3OS4xLDk3LjEsMTgyLjIsOTguOSwxODQuN3oiLz48L3N2Zz4=");
  background-position-x: 98%;
  background-position-y: 10px;
  background-repeat: no-repeat;
  background-size: 15px;

  & :focus {
    outline: none;
  }
`;

export default LanguageSelect;
