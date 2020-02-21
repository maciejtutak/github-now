import { action, autorun, computed, observable, reaction, set } from "mobx";
import { deserialize, serializable, serialize } from "serializr";

import GitHubTrendingAPI from "../GitHubTrendingAPI";
import autoStore from "../autoStore";

/* connectiong 2 stores: https://github.com/mobxjs/mobx/issues/332 / */

export class RepositoryDataStore {
	transportLayer: GitHubTrendingAPI = new GitHubTrendingAPI()
	@observable data: Array<any> = []
	@observable isLoading: Boolean = false

	constructor(public root: RepositoryStore) {
		this.loadData();
		
		const reactionTimeSpan = reaction(
			() => root.repositoryUI.timeSpan,
			timeSpan => { console.log("timespan change"); this.loadData();}
		);
		
		const reactionLanguage = reaction(
			() => root.repositoryUI.language,
			language => { console.log("language change"); this.loadData(); }
		);

		// autorun(() => {
		// 	//ts-lint:disable-next-line:no-console 
		// 	console.log('TIMESPAN CHANGE', root.repositoryUI.timeSpan)
		// 	//ts-lint:disable-next-line:no-console
		// 	console.log('LANGUAGE CHANGE', root.repositoryUI.language)
		// 	this.loadData();
		// })
	}

	@action
	loadData = async () => {
		const params = {
			language: this.root.repositoryUI.language,
			since: this.root.repositoryUI.timeSpan
		}
		const urlParams = new URLSearchParams(Object.entries(params))
		await this.transportLayer.getData(urlParams)
			.then(data => this.data = data);
		this.isLoading = false;
	}
}

interface Language {
	urlParam: string,
	name: string
}


enum SortOptions {
	descending = "descending",
	ascending = "ascending",
}

class Sortable {
	@serializable @observable name: string;
	@serializable @observable option: SortOptions = SortOptions.descending;

	constructor(name: string) {
		this.name = name;
	}

	changeSortType = () => {
		this.option = (this.option === SortOptions.descending) ? SortOptions.ascending : SortOptions.descending;
		console.log(this.option);
	}
}


export class RepositoryUIStore {
	transportLayer: GitHubTrendingAPI = new GitHubTrendingAPI()

    @observable timeSpan: string = "daily";
	@serializable @observable language: string = "";

	@serializable @observable languages: Array<Language> = [{ urlParam: "", name: "Any" }]
	
	// @observable sortOption: SortOptions = SortOptions.starsDescending;
	@serializable @observable sortable: Sortable = new Sortable("stars");

	constructor(public root: RepositoryStore) {
		this.loadLanguages();
	}

	@action 
	loadLanguages = async () => {
		await this.transportLayer.getLanguages()
		.then(languages =>  { this.languages = this.languages.concat(languages) });
	}
}

class RepositoryStore {
	@observable repositoryUI: RepositoryUIStore;
	@observable repositoryData: RepositoryDataStore;

	constructor() {
		// this.loadData();
		// observe(this, (change) => { this.loadData() });
		this.repositoryUI = new RepositoryUIStore(this);
		this.repositoryData = new RepositoryDataStore(this);
	}


	@computed
	get sorted() {
		switch(this.repositoryUI.sortable.name) {
			case "stars":
				switch(this.repositoryUI.sortable.option) {
					case SortOptions.descending:
						return this.repositoryData.data.slice().sort((a, b) => b.stars - a.stars)
					case SortOptions.ascending:
						return this.repositoryData.data.slice().sort((a, b) => a.stars - b.stars)
				}
			case "forks":
				switch(this.repositoryUI.sortable.option) {
					case SortOptions.descending:
						return this.repositoryData.data.slice().sort((a, b) => b.forks - a.forks)
					case SortOptions.ascending:
						return this.repositoryData.data.slice().sort((a, b) => a.forks - b.forks)
				}
			default:
				return this.repositoryData.data;
		}
		// case SortOptions.starsDescending:
		// 	return this.repositoryData.data.sort((a, b) => b.stars - a.stars);
		// case SortOptions.starsAscending:
		// 	return this.repositoryData.data.sort((a, b) => a.stars - b.stars);
		// case SortOptions.forksDescending:
		// 	return this.repositoryData.data.sort((a, b) => b.forks - a.forks);
		// case SortOptions.forksAscending:
		// 	return this.repositoryData.data.sort((a, b) => a.forks - b.forks);
		// default:
		// 	return this.repositoryData.data;
		// }
	}

	@action
	changeTimeSpan = (e: React.FormEvent<HTMLInputElement>) => {
		this.repositoryUI.timeSpan = e.currentTarget.value;
		// this.repositoryData.isLoading = true;
	}

	@action
	changeLanguage = (e: React.FormEvent<HTMLSelectElement>) => {
		this.repositoryUI.language = e.currentTarget.value;
	}
}

export default RepositoryStore;
 