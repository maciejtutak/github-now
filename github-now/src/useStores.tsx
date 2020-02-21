import React from "react";
import RepositoryStore from './stores';

const StoresContext = React.createContext({
    repositoryStore: new RepositoryStore()
});

const useStores = () => React.useContext(StoresContext);

export const StoreProvider = StoresContext.Provider
export const StoreConsumer = StoresContext.Consumer

export default useStores;