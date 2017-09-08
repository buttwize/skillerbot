export default {
	name: 'Rules',
	description: 'Explains how to behave in the lvl3 plug.dj room.',
	params: 'None',
	aliases: ['rules'],
	run: function ({mp, command, args, message}) {
		mp.chat(`Don't be a fuckboi.`)
			.then(() => message.delete());
	}
}
