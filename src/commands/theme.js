export default {
	name: 'Theme',
	description: 'Sets the theme for the room, !themes lists the current themes.',
	params: '[type]',
	aliases: ['theme', 'themes'],
	run: function ({mp, command, args, message, settings}) {
		if (command === 'themes') {
			mp.getPlaylists()
				.then((playlists) => {
					const unique_names = new Set();
					playlists.forEach((playlist) => unique_names.add(playlist.name));
					return [...unique_names];
				})
				.then((unique_names) => {
					mp.chat(`Available themes are: ${unique_names.join(', ')}.`);
					message.delete();
				})
		} else if (args !== [] && args[0] !== '') {
			const theme = args[0].toLowerCase();
			mp.getPlaylists()
				.then((playlists) => {
					return playlists.filter((playlist) => playlist.name.toLowerCase().startsWith(theme));
			}).then((matches) => {
				if(matches === []) {
					mp.chat(`Theme ${theme} doesn't exist.`);
				} else {
					const random = Math.floor(Math.random() * matches.length);
					matches[random].activate();
					mp.chat(`Theme set to: ${theme}.`).then((sent) => message.delete());
				}
			})
		}
	}
}
