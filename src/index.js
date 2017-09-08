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
	if (is_command(message.message)) {
		const command_args = get_command_args(message.message);
		if (commands.has(command_args[0])) {
			const command = commands.get(command_args[0]);
			command.run({
				mp,
				command_args,
				message: message.message
			});
		}
	}
}

mp.on('chat', onChat);
