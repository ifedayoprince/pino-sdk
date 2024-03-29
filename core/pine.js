class Pine {
	constructor() {
		window.pine = {
			server: "https://api-pinocchio.cyclic.app", 
			API_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNlcnZpY2VzIiwiaWF0IjoxNjgxMTgyNjkwLCJleHAiOjE2ODY1Mzk0OTB9.qTUKRyqIP3YeiJCK1dDRS8ugUJgmjU5UeDXsD9hMHeM"
		}
		window.pine.fetch = axios.create({baseUrl: window.pine.server}), 
		window.pine.fetch.defaults.headers.common['Authorization'] = `Bearer ${window.pine.API_KEY}`; 
		this.params = {};
	}
	async resolve(resolver, cb) {
		var urlParams = {};
		const searchParams = new URLSearchParams(window.location.href.split("?")[1]);
		searchParams.forEach((value, key) => {
			urlParams[key] = value;
		});
		if(!urlParams.origin && urlParams.origin.length < 8) throw new Error("'origin' is invalid" );
		await resolver.resolve(this, urlParams.origin, cb);
		// cb();
	}
	on(event, cb) {
		try {
			switch (event) {
				case 'init': {window.addEventListener('load', ()=>{cb();}); break;}
				case 'offline': {window.addEventListener('offline', ()=>{cb();}); break;}
			}
		} catch (e) {
			
		}
	}
	async fetch(url) {
		var nUrl = url.replace(/\./g, "/");
		nUrl = `${window.pine.server}/${nUrl}`;
	
		return window.pine.fetch.get(nUrl);
	}
	async fetchP(url, body) {
		var nUrl = url.replace(/\./g, "/");
		nUrl = `${window.pine.server}/${nUrl}`;
	
		return window.pine.fetch.post(nUrl);
	}
}

export default Pine;
