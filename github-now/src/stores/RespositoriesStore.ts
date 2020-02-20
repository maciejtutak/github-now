import { observable, runInAction } from "mobx";

import GitHubTrendingAPI from "../GitHubTrendingAPI";

export default class RepositoriesStore {
	transportLayer: GitHubTrendingAPI
	@observable data: Array<any> = []
	@observable isLoading: Boolean = true;

	constructor() {
		this.transportLayer = new GitHubTrendingAPI();
		this.loadData();
	}

	loadData = () => {
		this.isLoading = true;
		this.transportLayer.getData({})
			.then(data => this.data = data);
		console.log(this.isLoading);
		console.log(this.data);
	}
}

