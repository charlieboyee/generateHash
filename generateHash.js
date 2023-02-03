const bcrypt = require('bcrypt');
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

const saltRounds = 10;

const getUserInput = () => {
	readline.question('Please enter a password to hash: ', (pwToHash) => {
		if (!pwToHash) return getUserInput();

		bcrypt.hash(pwToHash, saltRounds, (err, hash) => {
			if (err) return console.log(err);
			console.log(hash);
		});

		readline.close();
	});
};

getUserInput();
