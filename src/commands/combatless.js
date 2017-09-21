const profile_prefix = 'https://cbl.moe/';

export default {
	name: 'Combatless',
	description: 'RIP until combatless is back up.',
	params: 'None',
	aliases: ['combatless', 'cbl'],
	run: function ({mp, command, args, message}) {
		const res = args.length > 0 ? profile_prefix + args[0] : 'https://combatless.com/hiscores';
		mp.chat(res)
			.then(() => message.delete());
	}
}
