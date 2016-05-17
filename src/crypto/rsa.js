"use strict";

var crypto = require("crypto");
var fs = require("fs");

module.export = {
	encryptAndDecrypt: encryptAndDecrypt,
	signAndVerify: signAndVerify,
	response: formulateResponse
}

function encrypt(plaintext, key) {
	var ciphertext = crypto.publicEncrypt(key, new Buffer(plaintext, 'utf8'));

	if(process.argv.indexOf("-d") != -1 || process.argv.indexOf("--debug") != -1) {
		console.log("===== ENCRYPTION =====");
		console.log("Plaintext: " + plaintext);
		console.log("Key: " + key);
		console.log("Ciphertext: " + ciphertext.toString('hex'));
	}

	return ciphertext;
}

function decrypt(ciphertext, key) {
	var plaintext = crypto.privateDecrypt(key, ciphertext).toString('utf8');

	if(process.argv.indexOf("-d") != -1 || process.argv.indexOf("--debug") != -1) {
		console.log("===== DECRYPTION =====");
		console.log("Ciphertext: " + ciphertext.toString('hex'));
		console.log("Key: " + key);
		console.log("Plaintext: " + plaintext);
	}

	return plaintext;
}

function encryptAndDecrypt(text, publicKey, privateKey) {
	var ciphertext = encrypt(text, publicKey.slice(1));
	var plaintext = decrypt(ciphertext, privateKey.slice(1));
	return {cipher: ciphertext, plain: plaintext};
}

function signAndVerify(text, publicKey, privateKey) {
	var signed = sign(text, privateKey);
	var verify = verift(signed, publicKey);
}

function formulateResponse(text, mode) {
	var privateKey = fs.readFileSync("./priv.pem", "utf8");
	var publicKey = fs.readFileSync("./pub.pem", "utf8");
	var response = "ERROR";
	try {
		if(mode === "encryptAndDecrypt") {
			result = encryptAndDecrypt(text, publicKey, privateKey);
			response =  "===== ENCRYPTION =====" +
						"\nPlaintext: " + text + 
						"\nKey: " + publicKey +
						"\nCiphertext: " + result.cipher +
						"\n\n===== DECRYPTION =====" +
						"\nCiphertext: " + result.cipher + 
						"\nKey: " + privateKey +
						"\nPlaintext: " + result.plain;
		} else if(mode === "signAndVerify") {
			response =  
		}
	} catch(err) {
		console.log("Error for text: " + text + "\nkey: " + key + "\nflag: " + encryption);
	}
	return response;
}

if(require.main == module) {
	GLOBAL.DEBUG = process.argv.indexOf("-d") != -1 || process.argv.indexOf("--debug") != -1;
	encryptAndDecrypt("Steva voli Fionu, ali ona ne zna sta da radi.");
}