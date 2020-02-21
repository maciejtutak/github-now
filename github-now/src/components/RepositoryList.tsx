import React, { Component, MouseEvent } from "react";

import RepositoryController from "./RepositoryController";
import RepositoryItem from "./RepositoryItem";
import { observer } from "mobx-react";
import styled from "styled-components";
import useStores from '../useStores';

const RepositoryList = observer(() => {
    const { repositoryStore }  = useStores();
    
    return (
        <ListContainer>
            <button onClick={repositoryStore.repositoryData.loadData}>Load Data</button>
            <RepositoryController />
            <List>
                {!repositoryStore.repositoryData.isLoading ? repositoryStore.sorted.map((item, idx) => <RepositoryItem item={item} key={idx} />) : <p>Loading...</p>}
            </List>
        </ListContainer>
    )  
});

export default RepositoryList;

const ListContainer = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    max-width: 1024px;
    background-color: #ffffff;
`

const List = styled.ul`
    margin: 0 auto;
    padding: 10px 0;
    width: 100%;
    list-style: none;
`
