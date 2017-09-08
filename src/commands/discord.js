export default {
	name: 'Discord',
	description: 'Gives the invite link to the level 3 discord.',
	params: 'None',
	aliases: ['discord'],
	run: function ({mp, command, args, message}) {
		mp.chat('Join the discord at https://discord.gg/44RfTaZ.  50 EHP required.')
			.delay(30000)
			.then(() => message.delete());
	}
}
