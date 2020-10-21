const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '*****': " ",
};

function decode(expr) {
    let result = [];
    for (let i = 0; i < expr.length / 10; i++) {
        let letter = [];
        for (let j = 0; j < 10; j += 2) {
            let code = expr[i * 10 + j] + expr[i * 10 + j + 1];
            code === '10' ? letter.push('.') : code === '11' ? letter.push('-') : code === '**' ? letter.push('*') : null;
        };
        result.push(MORSE_TABLE[letter.join('')]);
    }
    return result.join('')
}

module.exports = {
    decode
}