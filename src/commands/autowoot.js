export default {
	name: 'Autowoot',
	description: 'Toggles autowoot for the bot.',
	params: 'None',
	aliases: ['autowoot'],
	run: function ({mp, command, args, message, settings}) {
		settings.autowoot = !settings.autowoot;
		mp.chat(`Autowoot is now ${settings.autowoot ? 'enabled' : 'disabled'}.`)
			.delay(5000)
			.then((sent) => sent.delete());
		message.delete();
	}
}
