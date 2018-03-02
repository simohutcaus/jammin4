// apiKey used for testing before implementing the Oauth flows.
// const apiKey = 'BQAOwwlhAmqOylOJyVT2gEuee348TDnuvEHjMrN8Qq6E6hUa_N8WW2hFYnPhihtbOuqxjkx5EisWyY4XfJQ';

const clientID = "25b4bc3aa4924ed7bb4fb19027a073b1";
let spotifytkn = "";
const redirect_uri = "http://localhost:3000";




const SpotifySearch = {

	getAuth() {
		const website = window.location.href;
		const getTkn = website.match(/access_token=([^&]*)/);
		if (getTkn) {
			spotifytkn = getTkn[1];
			return spotifytkn;	
		} else {
			const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_uri}`
			window.location = authUrl;
		}
	},

	search() {
		let getTkn = SpotifySearch.getAuth();
		//window.location(getTkn);
		console.log('starting');
		return fetch (`https://api.spotify.com/v1/search?q=shake&it&off&type=track`, {
			headers: {
				Authorization: `Bearer ${spotifytkn}`
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