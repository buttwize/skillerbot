import config from '../config';
import combatless from './combatless';

export function is_command(message) {
	return message[0] === config.command_prefix;
}

export function get_command_args(message) {
	return message.slice(1)
		.split(' ');
}

export const list = [
	combatless
];

export const commands = new Map();

list.forEach((command) => {
	command.aliases.forEach((alias) => commands.set(alias, command));
});

