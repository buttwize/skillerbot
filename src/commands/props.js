const compliments = [
	'Awesome Song',
	'Great Play',
	'Big Tune',
	':choooone:',
	'Your song touched me in a special place'
];

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
		dj.chat(`- ${message.user} gave you props!  ${compliments[Math.floor(Math.random()*compliments.length)]}!`);
		message.delete();
	}
}
