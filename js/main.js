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

btnEncrypt.onclick = () => processText('encrypt');
btnDecrypt.onclick = () => processText('decrypt');
btnClear.onclick = clear;
btnCopy.onclick = copy;

const encryptMapping = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};

const decryptMapping = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
};

function processText(type) {
    hideFront();
    let text = inputText.value.toLowerCase();
    outputText.textContent = (type === 'encrypt') ? convertText(text, encryptMapping) : convertText(text, decryptMapping);
    showFront();
}

function convertText(text, mapping) {
    return text.split('').map(char => mapping[char] || char).join('');
}

function hideFront(){
    wait.style.display = 'block';
    outputText.style.display = 'none';
}

function showFront(){
    wait.style.display = 'none';
    outputText.style.display = 'block';
}

function clear() {
    inputText.value = '';
    outputText.textContent = '';
}

function copy() {
    let text = outputText.textContent;
    navigator.clipboard.writeText(text);
}
