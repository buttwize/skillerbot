export default {
	name: 'Props',
	description: 'Gives the current dj props for playing a great song.',
	params: '<@user>',
	aliases: ['props'],
	run: function ({mp, command, args, message}) {
		const dj = mp.dj();
		if (dj == null) {
			message.delete();
			return;
		}
		dj.getUser().chat(`- ${message.user} gave you props for playing an awesome song!`);
		message.delete();
	}
}
