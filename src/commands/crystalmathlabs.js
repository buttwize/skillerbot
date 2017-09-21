const profile_prefix = 'https://crystalmathlabs.com/tracker/track.php?player=';

export default {
	name: 'CrystalMathLabs',
	description: `Gives a link to the player's tracking page.`,
	params: '<name>',
	aliases: ['cml'],
	run: function ({mp, command, args, message}) {

		if (args.length > 0) {
			mp.chat(profile_prefix + args.join('_'))
				.then(() => message.delete());
		} else {
			mp.chat(`Specify a player's name with !cml <name>`)
				.then(() => message.delete());
		}
	}
}
