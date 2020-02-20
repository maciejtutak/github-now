import React from 'react';
// import './App.css';
import RepositoriesView from './components/RepositoriesView';
import logo from './logo.svg';
import styled from 'styled-components';

function App() {
  return (
    <Layout>
      <header>
        <h1>Hello, Hello!</h1>
        <p>Whats up?</p>
        <RepositoriesView />  
      </header>
    </Layout>
  );
}

const Layout = styled.div ``;

export default App;
