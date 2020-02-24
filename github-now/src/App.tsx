import React from 'react';
import RepositoryList from './components/RepositoryList';
import styled from 'styled-components';

function App() {
  return (
    <Layout>
      <Header>
        <h1>GitHub Now</h1>
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
  padding: 10px 20px;
`;

export default App;

