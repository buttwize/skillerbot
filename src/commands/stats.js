export default {
	name: 'Stats',
	description: 'Sends a link to osrs hiscores with the username of the player specified.',
	params: '<username>',
	aliases: ['stats', 'hiscore'],
	run: function({mp, command, args, message}) {
		const tmp = args.join(' ');
		const name = tmp[0] === '@' ? tmp.slice(1) : tmp;
		mp.chat(`http://services.runescape.com/m=hiscore_oldschool/hiscorepersonal.ws?user1=${encodeURI(name)}`)
			.then(() => message.delete());
	}
}
