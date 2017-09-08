export default {
	name: 'Rules',
	aliases: ['rules'],
	run: function ({mp, command, args, message}) {
		mp.chat(`Don't be a fuckboi.`)
			.then(() => message.delete());
	}
}
