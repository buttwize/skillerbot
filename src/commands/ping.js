export default {
	name: 'Ping',
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
