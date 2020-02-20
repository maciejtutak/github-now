const apiUrl = "https://github-trending-api.now.sh/repositories?";

export default class GitHubTrendingAPI {
	getData = (requestParams: Record<string, string>) => {
		const options = {
			method: "GET",
		}

		const request = new Request(`${apiUrl}`, options);
		console.log(request)
		return fetch(request)
			.then((response) => {
				console.log(response);
				return response.json()
			})
			.catch((error) => {
				console.log(error)
			})
	}
}