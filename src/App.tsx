import styled, { ThemeProvider } from 'styled-components';

import GlobalStyles from './styled/GlobalStyles';
import React from 'react';
import RepositoryController from "./components/RepositoryController";
import RepositoryList from './components/RepositoryList';
import { observer } from 'mobx-react';
import useStores from './useStores';

const App = observer(() => {
  const { themeStore } = useStores();
  
  return (
    <ThemeProvider theme={themeStore.theme}>
      <Layout>
        <GlobalStyles />
        <Header>
            <h1>GitHub Now</h1>
            <small>Alternative interface for browsing GitHub trending repositories.</small>
        </Header>
          <RepositoryController />
      <RepositoryList />  
      </Layout>
    </ThemeProvider>
  );
})



const Layout = styled.div`
  margin: 0 auto;
  padding: 0;
  max-width: 1024px;
`;

const Header = styled.header`
  position: relative;
  padding: 20px;
  margin-bottom: 10px;
  
  width: 100%;
  display: flex;
  flex-direction: column;

  @media all and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export default App;

