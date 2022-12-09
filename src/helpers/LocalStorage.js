export const User = {
	getUser: () => {
		return JSON.parse(localStorage.getItem('user'));
	},
	setUser: (payload) => {
		localStorage.setItem(
			'user',
			(typeof payload === 'object') ? JSON.stringify(payload) : payload
		);
	},
	clearUser: () => {
		localStorage.removeItem('user');
	},
};

export const Movie = {
	setMovie:(payload) =>{
		localStorage.setItem(
			'movie',
			(typeof payload === 'object')? JSON.stringify(payload):payload 
		);
	},

	getMovie : () =>{
		return JSON.parse(localStorage.getItem('movie'));
	}
}
