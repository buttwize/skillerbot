import config from '../config';
import combatless from './combatless';
import discord from './discord';
import rules from './rules';
import say from './say';
import stats from './stats';
import ping from './ping';
import restart from './restart';
import help from './help';
import props from './props';

export function is_command(message) {
	return message[0] === config.command_prefix;
}

export function get_command_args(message) {
	return message.slice(1)
		.split(' ');
}

export const list = [
	help,
	combatless,
	discord,
	say,
	rules,
	stats,
	ping,
	restart,
	props
];

export const commands = new Map();

list.forEach((command) => {
	command.aliases.forEach((alias) => commands.set(alias, command));
});

