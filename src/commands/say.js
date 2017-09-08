export default {
	name: 'Say',
	aliases: ['say'],
	run: function({mp, command, args, message}) {
		message.delete();
		mp.chat(args.join(' '));
	}
}
