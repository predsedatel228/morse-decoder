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
    '**********': ' '
};

function decode(expr) {
    let letters = expr.match(/[01*]{10,10}/g)
    let newLetters = letters.map(element => element.match(/[01*]{2,2}/g));
    let morseLetters = [];
    let result = []
    for (let i = 0; i < newLetters.length; i++) {
        for (let t = 0; t <= 5; t++) {
            if (newLetters[i][t] === '10') {
                newLetters[i][t] = '.'
            }
            if (newLetters[i][t] === '11') {
                newLetters[i][t] = '-'
            }
            if (newLetters[i][t] === '00') {
                newLetters[i].splice(t, 1)
                t -= 1
            }
        }
        morseLetters[i] = newLetters[i].join('')
    }
    for (let i = 0; i < morseLetters.length; i++) {
        for (let key in MORSE_TABLE) {
            if (morseLetters[i] === key) {
                result.push(MORSE_TABLE[key])
            }
        }
    }
    return result.join('')
}

decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010")


module.exports = {
    decode
}