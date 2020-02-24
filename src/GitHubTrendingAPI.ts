const apiUrl = "https://github-trending-api.now.sh/";

export default class GitHubTrendingAPI {
	// getData = (urlParams: URLSearchParams) => {
	getData = (urlParams: { [key: string]: string}) => {
		const options = {
			method: "GET",
		}

		// const request = new Request(`${apiUrl}repositories?` + urlParams, options);
		const request = new Request(`${apiUrl}repositories?since=${urlParams.since}&language=${urlParams.language}`, options);
		console.log(request);
		return fetch(request)
			.then((response) => {
				return response.json()
			})
			.catch((error) => {
				console.log(error)
			})
	}

	getLanguages = () => {
		const options = {
			method: "GET",
		}
		const request = new Request(`${apiUrl}languages`, options);
		console.log(request)
		return fetch(request)
			.then((response) => {
				return response.json()
			})
			.catch((error) => {
				console.log(error)
			})
	}
}