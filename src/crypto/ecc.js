"use strict";

var crypto = require("crypto");

module.export = {
	encrypt: encrypt,
	decrypt: decrypt,
	response: formulateResponse
}

function encrypt(plaintext, key) {
	var cipher = crypto.createCipher("aes128", key);
	cipher.setAutoPadding(true);
	var ciphertext = cipher.update(plaintext, 'utf8', 'hex');
	ciphertext += cipher.final('hex');

	if(process.argv.indexOf("-d") != -1 || process.argv.indexOf("--debug") != -1) {
		console.log("===== ENCRYPTION =====");
		console.log("Plaintext: " + plaintext);
		console.log("Key: " + key);
		console.log("Ciphertext: " + ciphertext);
	}

	return ciphertext;
}

function decrypt(ciphertext, key) {
	var decipher = crypto.createDecipher("aes128", key);
	decipher.setAutoPadding(true);
	var plaintext = decipher.update(ciphertext, 'hex', 'utf8');
	plaintext += decipher.final('utf8');

	if(process.argv.indexOf("-d") != -1 || process.argv.indexOf("--debug") != -1) {
		console.log("===== DECRYPTION =====");
		console.log("Ciphertext: " + ciphertext);
		console.log("Key: " + key);
		console.log("Plaintext: " + plaintext);
	}

	return plaintext;
}

function formulateResponse(text, key, encryption) {
	var response = "ERROR: Bad decrypt";
	try {
		if(encryption) {
			response =  "===== ENCRYPTION =====" +
						"\nPlaintext: " + text + 
						"\nKey: " + key +
						"\nCiphertext: " + encrypt(text, key);
		} else {
			response =  "===== DECRYPTION =====" +
						"\nCiphertext: " + text + 
						"\nKey: " + key +
						"\nPlaintext: " + decrypt(text, key);
		}
	} catch(err) {
		console.log("Error for text: " + text + "\nkey: " + key + "\nflag: " + encryption);
	}
	return response;
}

if(require.main == module) {
	GLOBAL.DEBUG = process.argv.indexOf("-d") != -1 || process.argv.indexOf("--debug") != -1;
	decrypt(encrypt("Testiramo da li momir voli milovana, ili mozda i ne?", "12345678"), "12345678");
}