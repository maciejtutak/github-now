import React from 'react';
import RepositoryController from "./components/RepositoryController";
import RepositoryList from './components/RepositoryList';
import styled from 'styled-components';

function App() {
  return (
    <Layout>
      <Header>
        <div>
          <h1>GitHub Now</h1>
          <small>Alternative interface for browsing GitHub trending repositories.</small>
        </div>
        <RepositoryController />
      </Header>
        <RepositoryList />  
    </Layout>
  );
}

const Layout = styled.div`
  margin: 0 auto;
  padding: 0;
  max-width: 1024px;
`;

const Header = styled.header`
  position: relative;
  padding: 10px 20px 20px;
  
  display: flex;
  flex-direction: column;

  @media all and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export default App;

