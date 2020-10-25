const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
	 // write your solution here
	let arr = [];

	for (i = 0; i < expr.length; i += 10) {
		let a = '';
	
		for (let k = 0; k < 10; k += 2) {
			if (expr[k + i] + expr[k + i + 1] === '**') {
				a += ' ';
			}
			if (expr[k + i] + expr[k + i + 1] === '10') {
				a += '.';
			}
			if (expr[k + i] + expr[k + i + 1] === '11') {
				a += '-'
			}
		}
		arr.push(a)
	}
	return arr.map((item) => (MORSE_TABLE[item] ? MORSE_TABLE[item] : " ")).join("");
}

module.exports = {
    decode
};