import forever from 'forever-monitor';

const child = new (forever.Monitor)('bin/skillerbot.js');

child.on('exit:code', function (code) {
	if (code === 222) {
		console.log('Forever monitor detected skillerbot restarting itself');
		child.restart();
	} else {
		console.error('Forever detected script exited with code ' + code);
		process.exit();
	}
});

child.start();
