const shell = require('shelljs');

// shell.exec('pnpm install');

module.exports = {
	exec: command => shell.exec(command),
	format: () => module.exports.exec('prettier ./src ./scripts -w')
};
