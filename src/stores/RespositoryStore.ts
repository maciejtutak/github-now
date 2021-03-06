import { action, autorun, computed, observable, reaction, set } from "mobx";

import GitHubTrendingAPI from "../GitHubTrendingAPI";

type Language = {
	urlParam: string,
	name: string
}

export enum SortOptions {
	descending = 0,
	ascending = 1,
	none = 2
}
export class RepositoryStore {
	transportLayer: GitHubTrendingAPI = new GitHubTrendingAPI()
	
	@observable data: Array<any> = []
	@observable isLoading: Boolean = false

    @observable timeSpan?: string;
	@observable language?: Language;
	@observable languages: Array<Language> = [];

	@observable activeSort?: string;
	@observable activeSortOption?: SortOptions;
	sortOptionGenerator?: Iterator<number>;

	constructor() {
		this.loadLanguages();
		this.setUpFetchDataReactions();

		let firstRun = true

		autorun(
			() => {
			const serializableData = { 
				timeSpan: this.timeSpan, 
				language: this.language,
				activeSort: this.activeSort,
				activeSortOption: this.activeSortOption
			}

			const json = JSON.stringify(serializableData);

			if (firstRun) {
				const existingStore = JSON.parse(localStorage.getItem("store") || "");

				if (existingStore) {
					set(this, existingStore);
				}
				
			} else {
				localStorage.setItem("store", json);
			}
		})

		firstRun = false

		if (!this.timeSpan) { this.timeSpan = "daily" } 
		if (!this.language) { this.language = {urlParam: "", name: "Any"} }

		this.loadData();
		}

	
	setUpFetchDataReactions() {
		reaction(
			() => this.timeSpan,
			() => this.loadData()
		);
		reaction(
			() => this.language,
			() => this.loadData()
		);
	}

	@computed
	get isDataEmpty() {
		return !this.isLoading && this.data.length === 0;
	}


	@action
	changeTimeSpan = (e: React.FormEvent<HTMLInputElement>) => {
		this.timeSpan = e.currentTarget.value;
	}

	@action
	changeLanguage = (e: React.FormEvent<HTMLSelectElement>) => {
		const language: string = e.currentTarget.value;
		this.language = this.languages.find((item) => item.urlParam  === language) || {urlParam: "", name: "Any"};
	}
	
	/* 0, 1, 2 generator experiment */
	*optionGenerator(start?: number): Iterator<number> {
		let option = start || 0;
		while(true) {
			option++;
			option %= 3;
			yield option;
		}
	}

	@action
	changeActiveSort = (to: string) => {
		this.activeSort = to;
		this.activeSortOption = SortOptions.descending;
	}

	@action
	changeActiveSortOption = () => {
		const option = this.optionGenerator(this.activeSortOption).next().value;
		switch(option) {
			case 0:
				this.activeSortOption = SortOptions.descending;
				break;
			case 1:
				this.activeSortOption = SortOptions.ascending
				break;
			case 2:
				this.activeSortOption = SortOptions.none
		}
	}

	@computed
	get sortedData() {
		switch(this.activeSort) {
			case "Stars":
				switch(this.activeSortOption) {
					case SortOptions.descending:
						return this.data.slice().sort((a, b) => a.stars - b.stars)
					case SortOptions.ascending:
						return this.data.slice().sort((a, b) => b.stars - a.stars)
					default:
						return this.data;
				}
			case "Forks":
				switch(this.activeSortOption) {
					case SortOptions.descending:
						return this.data.slice().sort((a, b) => a.forks - b.forks)
					case SortOptions.ascending:
						return this.data.slice().sort((a, b) => b.forks - a.forks)
					default:
						return this.data;
				}
			default:
				return this.data;
		}
	}

	/* data fetch */
	@action
	loadData = async () => {
		this.isLoading = true;
		const params = {
			since: this.timeSpan || "daily",
			language: this.language?.urlParam || "",
		}
		// const urlParams = new URLSearchParams(Object.entries(params))
		await this.transportLayer.getData(params)
			.then(data => this.data = data)
			.then(() => this.isLoading = false);
		}

	@action 
	loadLanguages = async () => {
		await this.transportLayer.getLanguages()
		.then(languages => this.languages = [{ urlParam: "", name: "Any" }].concat(languages));
	}

}


export default RepositoryStore;
 