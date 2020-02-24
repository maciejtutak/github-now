import { autorun, set } from "mobx";
import { deserialize, serialize } from "serializr";

import RepositoryStore from "./stores/RespositoryStore";

export default function(_this: RepositoryStore) {
	let firstRun = true

	// will run on change
	autorun(() => {
		// on load check if there's an existing store on localStorage and extend the store
		if (firstRun) {
			const existingStore = deserialize(RepositoryStore, localStorage.getItem("store"));

			if (existingStore) {
			    set(_this, existingStore);
            }
        }

		// from then on serialize and save to localStorage
		localStorage.setItem("store", serialize(_this))
	})

	firstRun = false
}