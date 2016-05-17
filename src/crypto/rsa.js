"use strict";

var crypto = require("crypto");
var fs = require("fs");

module.exports = {
	encryptAndDecrypt: encryptAndDecrypt,
	signAndVerify: signAndVerify,
	response: formulateResponse
}

function encrypt(plaintext, publicKey) {
	var ciphertext = crypto.publicEncrypt(publicKey, new Buffer(plaintext, 'utf8')).toString('hex');

	if(GLOBAL.DEBUG) {
		console.log("===== ENCRYPTION =====");
		console.log("Plaintext: " + plaintext);
		console.log("Key: " + publicKey);
		console.log("Ciphertext: " + ciphertext);
	}

	return ciphertext;
}

function decrypt(ciphertext, privateKey) {
	var plaintext = crypto.privateDecrypt(privateKey, new Buffer(ciphertext, 'hex')).toString('utf8');

	if(GLOBAL.DEBUG) {
		console.log("===== DECRYPTION =====");
		console.log("Ciphertext: " + ciphertext);
		console.log("Key: " + privateKey);
		console.log("Plaintext: " + plaintext);
	}

	return plaintext;
}

function sign(plaintext, privateKey) {
	var sign = crypto.createSign('RSA-SHA256');
	sign.update(plaintext);
	return sign.sign(privateKey, 'hex');
}

function verify(signature, publicKey, text) {
	var verify = crypto.createVerify('RSA-SHA256');
	verify.update(text);
	return verify.verify(publicKey, signature, 'hex');
}

function encryptAndDecrypt(text, publicKey, privateKey) {
	var ciphertext = encrypt(text, publicKey);
	var plaintext = decrypt(ciphertext, privateKey);
	return {cipher: ciphertext, plain: plaintext};
}

function signAndVerify(text, publicKey, privateKey) {
	var signed = sign(text, privateKey);
	console.log(signed);
	var verification = verify(signed, publicKey, text);
	console.log(verification);
}

function formulateResponse(text, key, mode, signature) {
	var privateKey = fs.readFileSync(__dirname + "/priv.pem", "utf8").slice(1);
	var publicKey = fs.readFileSync(__dirname + "/pub.pem", "utf8").slice(1);
	var response = {consolePrint: "ERROR"};
	try {
		if(mode === "encryption") {
			var encryption = encrypt(text, publicKey);
			response =  {
				consolePrint: "\n===== ENCRYPTION =====" +
						"\nPlaintext: " + text + 
						"\nPublic key: " + publicKey +
						"\nCiphertext: " + encryption,
				text: encryption
			};
		} else if(mode === "decryption") {
			var decryption = decrypt(text, privateKey);
			response =  {
				consolePrint: "\n===== DECRYPTION =====" +
						"\nCiphertext: " + text + 
						"\nPrivate key: " + privateKey +
						"\nPlaintext: " + decryption,
				text: decryption
			};
		} else if(mode === "sign") {
			var signature = sign(text, privateKey);
			response =  {
				consolePrint: "\n===== SIGNATURE =====" +
						"\nPlaintext: " + text + 
						"\nPrivate key: " + privateKey +
						"\nSignature: " + signature,
				text: signature
			};
		} else if(mode === "verify") {
			var v = verify(signature, publicKey, text);
			response =  {
				consolePrint: "\n===== SIGNATURE =====" +
						"\nSignature: " + text + 
						"\nPublic key: " + publicKey +
						"\nVerification: " + v,
				text: v
			};
		}
	} catch(err) {
		console.log(err);
		console.log("Error for text: " + text + "\nPrivate key: " + privateKey + "\nPublic key: " + publicKey + "\nflag: " + mode);
	} finally {
		return response;
	}
}

if(require.main == module) {
	GLOBAL.DEBUG = process.argv.indexOf("-d") != -1 || process.argv.indexOf("--debug") != -1;
	var privateKey = fs.readFileSync("./priv.pem", "utf8").slice(1);
	var publicKey = fs.readFileSync("./pub.pem", "utf8").slice(1);
	encryptAndDecrypt("Steva voli Fionu, ali ona ne zna sta da radi.", publicKey, privateKey);
	signAndVerify("Steva voli Fionu, ali ona ne zna sta da radi.", publicKey, privateKey);
}