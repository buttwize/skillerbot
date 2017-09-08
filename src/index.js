import miniplug from 'miniplug';
import secrets from './config/secrets';

const mp = miniplug(secrets.plug_credentials);

mp.join('lvl3')
	.then(() => {
	mp.chat('does this library work?');
	console.log(mp.room())
	});

