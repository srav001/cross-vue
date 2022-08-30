/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
const os = require('os');
const { exec, execSync } = require('child_process');

const path = require('node:path');
const { readFileSync, writeFileSync } = require('node:fs');

const { serverPort } = require('../build/config.js');

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

/**
 * It reads the capacitor.config.json file, deletes the server property if it exists, and then adds it
 * back in with the correct IP address and port
 * @param [addLiveServer=false] - boolean - if true, the capacitor.config.json file will be updated
 * with the live server url.
 */
const updateCapacitorConfig = (addLiveServer = false) => {
	const filePath = path.resolve('capacitor.config.json');
	const fileToEdit = JSON.parse(readFileSync(filePath, { encoding: 'utf8' }));
	if (fileToEdit.server) delete fileToEdit.server;
	if (addLiveServer)
		fileToEdit.server = {
			url: `http://${getIP()}:${serverPort}`,
			clearText: true
		};
	writeFileSync(filePath, JSON.stringify(fileToEdit, null, 2));
};

module.exports = {
	execute,
	executeWithSync,

	updateCapacitorConfig
};
