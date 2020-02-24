const apiUrl = "https://github-trending-api.now.sh/";

export default class GitHubTrendingAPI {
	getData = (urlParams: URLSearchParams) => {
		const options = {
			method: "GET",
		}

		const request = new Request(`${apiUrl}repositories?` + urlParams, options);
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
		console.log('GET LANGUAGES', request);
		return fetch(request)
			.then((response) => {
				return response.json()
			})
			.catch((error) => {
				console.log(error)
			})
	}
}