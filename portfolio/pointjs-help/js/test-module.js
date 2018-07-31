let ApiJS = {
	constructor: function (obj) {
		this.properties = {
			_stateRun: false,
			_engine: {},
			_prefix: ''
		};
		scanEngine = (obj, prefix) => {
			for (let i in obj) {
				let val = obj[i],
					key = i;
				if (typeof val === 'object') {
					scanEngine(val, prefix);
				}
				console.log(obj, val, key);
			}
		}
		if (typeof obj === 'object') {
			if (obj.stateRun) {
				this.properties._stateRun = obj.stateRun;
			}
			if (typeof obj.engine === 'object') {
				this.properties._engine = obj.engine;
				this.properties._prefix = obj.prefix;
			}
			if (this.properties._stateRun) {
				console.log('start');
				scanEngine(this.properties._engine, this.properties._prefix);
			}
		}
		console.log(this.properties);
	}
};

ApiJS.constructor({
	engine: pjs,
	prefix: 'pjs',
	stateRun: true
});