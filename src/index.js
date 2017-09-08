import miniplug from 'miniplug';
import secrets from './config/secrets';
import {commands, is_command, get_command_args} from './commands';

const mp = miniplug(secrets.plug_credentials);

mp.join('lvl3')
	.then(() => {
		mp.chat('starting up, also runescape sucks');
		console.log(mp.room());
		console.log(mp.users());
	});


function onChat(message) {
	if (is_command(message.message) && !message.own()) {
		const [command, ...args] = get_command_args(message.message);
		if (commands.has(command)) {
			commands.get(command).run({
				mp,
				command,
				args,
				message
			});
		}
	}
}

mp.on('chat', onChat);
