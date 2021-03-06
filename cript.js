const init 	= 97;
const final = 122;

var btn = document.getElementById('btn');

btn.addEventListener('click',encrypt);

function encrypt(){
	let type 	= document.getElementById('type').value;
	let key 	= document.getElementById('key').value;
	let text 	= document.getElementById('text').value;
	
	if(type == ''){
		alert("Selecione um tipo de encriptação");
		return;
	}

	text = window[type](text,key);

	document.getElementById('result').textContent = text;
}

function cesar(text, key){
	document.getElementById('key').value 	= "";
	document.getElementById('key').type 	= "number";

	let res 	= "";

	if(isNaN(key)){
		alert("A chave deve ser um numero inteiro!");
		return 'erro: chave inválida.';
	}

	for(var i = 0; i < text.length; i++ ){
		let char = text.substr(i,1);
		char = eval(char.charCodeAt(0)) + eval(key);

		if(char > 122){
			char = char - 122;
			char = init + char;
		}

		char = String.fromCharCode(char);
		res += char;
	}

	return res;
}

function vigenere(text,key){

	let keyLength = key.length; 
	let res = "";

	for(var i = 0; i < text.length; i++ ){
		
		let char 	= text.substr(i,1).charCodeAt(0);
		let keyChar = key.substr(i % keyLength,1);
		keyChar		= keyChar.charCodeAt(0) - init;
		
		char += keyChar;
		console.log(char);
		res += String.fromCharCode(char);
	}
	
	return res;
}

function zenitPolar(text){

}