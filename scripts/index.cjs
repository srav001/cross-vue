/* eslint-disable @typescript-eslint/no-var-requires */
const dev = require('./dev.js');
const build = require('./build.js');
const preview = require('./preview.js');
const houseKeeping = require('./houseKeeping.js');

module.exports = {
	...dev,
	...build,
	...preview,
	...houseKeeping
};
