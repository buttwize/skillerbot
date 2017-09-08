export default {
	name: 'Ping',
	description: 'Simple command to see if the bot is up and running.',
	params: 'None',
	aliases: ['ping'],
	run: function ({mp, command, args, message}) {
		mp.chat('pong')
			.delay(10000)
			.then((sent_message) => {
				message.delete();
				sent_message.delete();
			});
	}
}
