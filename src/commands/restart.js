import config from '../config';

export default {
	name: 'Restart',
	description: 'Restarts the bot.',
	params: 'None',
	aliases: ['restart'],
	run: function ({mp, command, args, message}) {
		mp.chat(`Restarting ${config.name}...`)
			.then(() => {
				mp.storage.save();
				process.exit(222);
			});
	}
}
