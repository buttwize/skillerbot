import miniplug from 'miniplug';
import secrets from './config/secrets';
import config from './config'
import {commands, is_command, get_command_args} from './commands';

const storage = {
	start_time: new Date(),
	save: function () {
		console.log(`Saving ${config}'s storage...`);
	}
};

const mp = miniplug(secrets.plug_credentials);

mp.storage = storage;

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
			commands.get(command)
				.run({
					mp,
					command,
					args,
					message
				});
		}
	}
}

function onAdvance(next, previous) {
	console.log(next)
	console.log(previous)
	if (next == null) {
		mp.joinWaitlist();
		return;
	}

	if (mp.me().id === next.dj.id) {
		return;
	}

	if (previous != null && previous.dj != null && mp.me().id === previous.dj.id && mp.me().id !== next.dj.id) {
		mp.leaveWaitlist();
	}
}

/*
function onWaitlistUpdate(next, previous) {
	if (next.length === 0 && mp.dj().id) {

	}
}*/

mp.on('chat', onChat);
mp.on('advance', onAdvance);
/*
mp.on('waitlistUpdate', onWaitlistUpdate);*/