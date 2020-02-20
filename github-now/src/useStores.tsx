import React from "react";
import { RepositoriesStore } from './stores';

const StoresContext = React.createContext({
    repositoriesStore: new RepositoriesStore()
});

const useStores = () => React.useContext(StoresContext);

export const StoreProvider = StoresContext.Provider
export const StoreConsumer = StoresContext.Consumer

export default useStores;