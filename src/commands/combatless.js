export default {
	name: 'Combatless',
	description: 'RIP until combatless is back up.',
	params: 'None',
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
