import { RepositoryStore, ThemeStore } from "./stores";

import React from "react";

const StoresContext = React.createContext({
    repositoryStore: new RepositoryStore(),
    themeStore: new ThemeStore(),
});

const useStores = () => React.useContext(StoresContext);

export default useStores;