export default {
	name: 'Discord',
	aliases: ['discord'],
	run: function ({mp, command, args, message}) {
		mp.chat('Join the discord at https://discord.gg/44RfTaZ')
			.delay(30000)
			.then(() => message.delete());
	}
}
