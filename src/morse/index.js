const MORSE_CODE = {
  "-.-.--": "!",
  ".-..-.": '"',
  "...-..-": "$",
  ".-...": "&",
  ".----.": "'",
  "-.--.": "(",
  "-.--.-": ")",
  ".-.-.": "+",
  "--..--": ",",
  "-....-": "-",
  ".-.-.-": ".",
  "-..-.": "/",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "---...": ":",
  "-.-.-.": ";",
  "-...-": "=",
  "..--..": "?",
  ".--.-.": "@",
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "..--.-": "_",
  "...---...": "SOS",
};

Object.freeze(MORSE_CODE);

function morse(text) {
  
  if (typeof text !== 'string') {

    throw new Error ("Please provide a morse string");

  }


  else if (typeof(text) === 'string'){  
  let txt = text.trim() //morse code has no empty space character(s) hence we have to trim our input parameters

  let morse_word = txt.split('   '); // since word code are seperated by 3 spaces, we first have to get all arrays of word

  let morse_char = []; // an initialized container to store arrays of single characters


  for (let i = 0; i < morse_word.length; i++) {

    morse_char.push(morse_word[i].split(' ')); // in morse, morse alphabet codes are seperated by single spaces hence, 
                                              //for each array of words, we need to stack the respective character in our morse-char array.
    



  }

  let char_array= []; //since morse codes has ann interpretation, this is a container to hold all interpretations in the given morse code

  for (let i = 0; i < morse_char.length; i++) {

    for (let j=0; j < morse_char[i].length; j++) {

      char_array.push(MORSE_CODE[morse_char[i][j]]);

      if( j === (morse_char[i].length -1)) {
        char_array.push(' ');
      }

    }
  }
  return char_array.toString().trim().replace(/,/g, '');


  }

 
  
}
module.exports = morse;
