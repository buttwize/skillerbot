export default {
	name: 'Stats',
	aliases: ['stats', 'hiscore'],
	run: function({mp, command, args, message}) {
		const tmp = args[0];
		const name = tmp[0] === '@' ? tmp.slice(1) : tmp;
		mp.chat(`http://services.runescape.com/m=hiscore_oldschool/hiscorepersonal.ws?user1=${name}`)
			.then(() => message.delete());
	}
}
