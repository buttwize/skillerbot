import write from 'write';
import pug from 'pug';
import sass from 'node-sass';
import {list} from '../src/commands';

const render = (filename, data) => pug.renderFile(filename, data, undefined);

const commands = list.map((command) => {
	command.aliases = command.aliases.map((alias) => `!${alias}`).join(', ');
	return command;
});

write.promise('public/index.html', render('site/index.pug', {commands}), undefined)
	.then(() => console.log('index.html written successfully.'));

sass.render({file: 'site/style.scss', outputStyle: 'compressed'}, (err, result) => {
	if (err) {
		console.log('Error encountered while writing style.scss.');
	} else {
		write.promise('public/style.css', result.css, undefined)
			.then(() => console.log('style.css written successfully.'));
	}
});
