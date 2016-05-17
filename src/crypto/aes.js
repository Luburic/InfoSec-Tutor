"use strict";

var crypto = require("crypto");

module.exports = {
	encrypt: encrypt,
	decrypt: decrypt,
	response: formulateResponse
};

function encrypt(plaintext, key) {
	var cipher = crypto.createCipher("aes192", key);
	cipher.setAutoPadding(true);
	var ciphertext = cipher.update(plaintext, 'utf8', 'hex');
	ciphertext += cipher.final('hex');

	if(GLOBAL.DEBUG) {
		console.log("===== ENCRYPTION =====");
		console.log("Plaintext: " + plaintext);
		console.log("Key: " + key);
		console.log("Ciphertext: " + ciphertext);
	}

	return ciphertext;
}

function decrypt(ciphertext, key) {
	var decipher = crypto.createDecipher("aes192", key);
	decipher.setAutoPadding(true);
	var plaintext = decipher.update(ciphertext, 'hex', 'utf8');
	plaintext += decipher.final('utf8');

	if(GLOBAL.DEBUG) {
		console.log("===== DECRYPTION =====");
		console.log("Ciphertext: " + ciphertext);
		console.log("Key: " + key);
		console.log("Plaintext: " + plaintext);
	}

	return plaintext;
}

function formulateResponse(text, key, mode) {
	var response = {text: "ERROR: Bad decrypt."};
	try {
		if(mode === 'encryption') {
			var encryption = encrypt(text, key);
			response = {
				consolePrint:   "\n===== ENCRYPTION =====" +
						"\nPlaintext: " + text + 
						"\nKey: " + key +
						"\nCiphertext: " + encryption,
				text: encryption
			};
		} else if(mode === 'decryption') {
			var decryption = decrypt(text, key);
			response = {
				consolePrint:   "\n===== DECRYPTION =====" +
						"\nCiphertext: " + text + 
						"\nKey: " + key +
						"\nPlaintext: " + decryption,
				text: decryption
			};
		}
	} catch(err) {
		console.log("Error for text: " + text + "\nkey: " + key + "\nflag: " + encryption);
	} finally {
		return response;
	}
}

if(require.main == module) {
	GLOBAL.DEBUG = process.argv.indexOf("-d") != -1 || process.argv.indexOf("--debug") != -1;
	decrypt(encrypt("Testiramo da li brena voli milovana, ili mozda i ne?", "12345678"), "12345678");
}