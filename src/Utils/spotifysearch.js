const apiKey = 'BQAOwwlhAmqOylOJyVT2gEuee348TDnuvEHjMrN8Qq6E6hUa_N8WW2hFYnPhihtbOuqxjkx5EisWyY4XfJQ';
const SpotifySearch = {
	search() {
		console.log('starting');
		return fetch (`https://api.spotify.com/v1/search?q=shake&it&off&type=track`, {
			headers: {
				Authorization: `Bearer ${apiKey}`
			}
		}).then (response => {
			console.log('mapping');
			return response.json().then(jsonResponse => {if (jsonResponse.tracks){
				console.log('array found');
				 return jsonResponse.tracks.items.map(tracks => (
					{
						id: tracks.id,
						name: tracks.name,
						popularity: tracks.popularity,
						preview_url: tracks.preview_url,
						album: tracks.album.name,
						artist: tracks.artists[0].name,
						track_number: tracks.track_number

					}
					
				)
			)
		}
	}
) 
		}
		)
		
	}
}
			

export default SpotifySearch;