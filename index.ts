import { program } from 'commander';
import download from 'download';
import fs from 'fs';
import compressing from 'compressing';

async function run() {
	// program.command
	const zipStream = await download('https://github.com/qzsiniong/git-svn/archive/refs/heads/main.zip');
	
	// fs.writeFileSync('temp/main2.zip', zipStream);


	compressing.zip.uncompress(zipStream, 'temp/main')

	console.log(123);
}

run();