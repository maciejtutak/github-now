import React from "react";
import RepositoryItem from "./RepositoryItem";
import RepositoryListHeader from "./RepositoryListHeader";
import { observer } from "mobx-react";
import styled from "styled-components";
import useStores from '../useStores';

const RepositoryList = observer(() => {
    const { repositoryStore }  = useStores();
    
    return (
        <ListContainer>
            <ListHeader>
                <RepositoryListHeader name="Stars" />
                <RepositoryListHeader name="Forks" />
            </ListHeader>
            <List>
                {repositoryStore.isDataEmpty && <ListText>There are no trending repositories for {repositoryStore.language?.name}...</ListText>}
                {!repositoryStore.isDataEmpty && repositoryStore.isLoading && <ListText>Loading data...</ListText>}
                {!repositoryStore.isDataEmpty && !repositoryStore.isLoading && repositoryStore.sortedData.map((item, idx) => <RepositoryItem item={item} key={idx} />)}
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

const ListHeader = styled.div`
    padding: 10px 20px 0;
    display: grid;
    grid-template-columns: 100px 100px 1fr;
    align-items: baseline;
    user-select: none;
    -webkit-user-select: none;
`; 

const ListText = styled.p`
    margin-top: 40px;
    font-size: 2.4rem;
    text-align: center;
`