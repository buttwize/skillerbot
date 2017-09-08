export default {
	name: 'Help',
	description: 'Gives the user help.',
	params: 'None',
	aliases: ['help'],
	run: function ({mp, command, args, message}) {
		message.delete();
		mp.chat('!help: https://buttwize.github.io/skillerbot/');
	}
}
