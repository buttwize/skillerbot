export default {
	name: 'Combatless',
	aliases: ['combatless', 'cbl'],
	run: function ({mp, command, args, message}) {
		mp.chat('rip')
			.delay(30000)
			.then((sent_message) => {
				message.delete();
				sent_message.delete();
			});
	}
}
