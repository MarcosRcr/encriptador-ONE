//anio actual en el footer
const year = document.getElementById('year')
year.textContent = new Date().getFullYear()

//buttons
const btnEncrypt = document.getElementById('encrypt-btn')
const btnDecrypt = document.getElementById('decrypt-btn')
const btnClear = document.getElementById('clear-btn')
const btnCopy = document.getElementById('copy-btn')

//inputs
const inputText = document.getElementById('Textin')

//outputs
const wait = document.getElementById('wait')
const outputText = document.getElementById('outText')

btnEncrypt.onclick = encrypt;
btnDecrypt.onclick = decrypt;
btnClear.onclick = clear;
btnCopy.onclick = copy;

function encrypt() {
    hideFront();
    let text = saveText();
    outputText.textContent = encryptText(text);
    showFront();
}

function decrypt() {
    hideFront();
    let text = saveText();
    outputText.textContent = decryptText(text);
    showFront();
}

function saveText() {
    let text = document.getElementById('Textin');
    return text.value;
}

function hideFront(){
    wait.style.display = 'block';
    outputText.style.display = 'none';
}

function showFront(){
    wait.style.display = 'none';
    outputText.style.display = 'block';
}

function encryptText(text) {
    let textin = text.toLowerCase();
    let textEncrypted = '';

    for(let i = 0; i < textin.length; i++){
        if(textin[i] == 'a'){
            textEncrypted += 'ai';
        }
        else if(textin[i] == 'e'){
            textEncrypted += 'enter';
        }
        else if(textin[i] == 'i'){
            textEncrypted += 'imes';
        }
        else if(textin[i] == 'o'){
            textEncrypted += 'ober';
        }
        else if(textin[i] == 'u'){
            textEncrypted += 'ufat';
        }
        else{
            textEncrypted += textin[i];
        }
    }
    return textEncrypted;
}

function decryptText(text) {
    let textin = text.toLowerCase();
    let textDecrypted = textin;

    textDecrypted = textDecrypted.replace(/ai/g, 'a');
    textDecrypted = textDecrypted.replace(/enter/g, 'e');
    textDecrypted = textDecrypted.replace(/imes/g, 'i');
    textDecrypted = textDecrypted.replace(/ober/g, 'o');
    textDecrypted = textDecrypted.replace(/ufat/g, 'u');

    return textDecrypted;
}


function clear() {
    inputText.value = '';
    outputText.textContent = '';
}

function copy() {
    let text = outputText.textContent;
    navigator.clipboard.writeText(text);
}
