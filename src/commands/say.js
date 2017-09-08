export default {
	name: 'Say',
	description: 'Echo.  Echo.',
	params: '<message>',
	aliases: ['say'],
	run: function ({mp, command, args, message}) {
		message.delete();
		if (args.length > 0) {
			mp.chat(args.join(' '));
		}
	}
}
