import React, { Component, MouseEvent } from "react";

import { observer } from "mobx-react";
import useStores from '../useStores';

// import GitHubTrendingAPI from "../GitHubTrendingAPI";

const RepositoriesView = observer(() => {
    const { repositoriesStore }  = useStores();

    return (
        <div>
            <h2>Hello</h2>
            <button onClick={repositoriesStore.loadData}>Load Data</button>
            <ul>
                {repositoriesStore.data && repositoriesStore.data.map(item => { return <li>{item.author}, {item.stars}, {item.name}, {item.language}</li>})}
            </ul>
        </div>
    )  
})

export default RepositoriesView;
