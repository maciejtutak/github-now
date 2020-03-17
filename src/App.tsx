import styled, { ThemeProvider } from "styled-components";

import GlobalStyles from "./styled/GlobalStyles";
import React from "react";
import RepositoryList from "./components/RepositoryList";
import Settings from "./components/Settings";
import { observer } from "mobx-react";
import useStores from "./useStores";

const App = observer(() => {
  const { themeStore } = useStores();

  return (
    <ThemeProvider theme={themeStore.theme}>
      <Layout>
        <GlobalStyles />
        <Header>
          <h1>GitHub Now</h1>
          <Settings />
        </Header>
        <RepositoryList />
      </Layout>
    </ThemeProvider>
  );
});

const Layout = styled.div`
  margin: 0 auto;
  padding: 0;
  padding-bottom: 120px;
  max-width: 1024px;
`;

const Header = styled.header`
  position: relative;
  padding: 20px;
  padding-bottom: 0;

  & h1 {
    line-height: 1.0;
    margin-bottom: 20px;
  }

  width: 100%;
  display: flex;
  flex-direction: column;

  @media all and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export default App;
