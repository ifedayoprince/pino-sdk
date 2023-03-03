export class PinoResolver {
	constructor() {
		
	}
	async resolve(app, origin, cb) {
		let data = await app.fetch(`pine.protocol.${origin}`);
		app.params = data.protocol.params;
		alert(origin)
		cb();
	}
}
