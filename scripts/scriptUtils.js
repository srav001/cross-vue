/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
const { exec, execSync } = require('child_process');
const os = require('os');

/**
 * It executes a command and logs the output to the console
 */
const execute = command =>
	exec(command, (err, stdout, stderr) => {
		console.log(stdout);
		if (err) console.error(err);
		else if (stderr) console.error(stderr);
	});
/**
 * It executes a command with sync ( for live loading commands like dev ) and prints the output to the console
 */
const executeWithSync = command => execSync(command, { stdio: 'inherit' });
/**
 * Get the IPv4 address of the first network interface that isn't internal
 */
const getIP = () =>
	Object.values(os.networkInterfaces())
		.flat()
		.filter(item => !item.internal && item.family === 'IPv4')
		.find(Boolean).address;

module.exports = {
	execute,
	executeWithSync,

	getIP
};
