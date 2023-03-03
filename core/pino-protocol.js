export class PinoResolver {
	constructor() {
		
	}
	async resolve(app, origin, cb) {
		app.fetch(`pine.protocol.${origin}`).then((data) => {
			app.params = data.protocol.params;
			cb()
		});
	}
}
