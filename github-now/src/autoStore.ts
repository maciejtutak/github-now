import { autorun, set } from "mobx";
import { deserialize, serialize } from "serializr";

import { RepositoryUIStore } from "./stores/RespositoryStore";

export default function(_this: RepositoryUIStore) {
	let firstRun = true
    console.log('Autorun!');

	// will run on change
	autorun(() => {
		// on load check if there's an existing store on localStorage and extend the store
		if (firstRun) {
			const existingStore = deserialize(RepositoryUIStore, localStorage.getItem("store"));

			if (existingStore) {
			    set(_this, existingStore);
            }
        }
        console.log('Autorun!');

		// from then on serialize and save to localStorage
		localStorage.setItem("store", serialize(_this))
	})

	firstRun = false
}