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
  
  // if (typeof(text) !== String) { 
  //   return "Not a String"; //since morse function must not take a non string parameter
  // }

  let txt = text.trim() //morse code has no empty space character(s) hence we have to trim our input parameters

  let morse_word = txt.split('   '); // since word code are seperated by 3 spaces, we first have to seperate all the words
   

  let morse_char = []; // an array for all morse char in our input string

  let word = [];

  for (let i = 0; i < morse_word.length; i++) {

    morse_char.push(morse_word[i].split(' ')); // in morse, morse_char codes are seperated by single spaces hence, we have to create an array of single characters from every word code

    // let morse_char = morse_word[i].split(' ');
    // char_array.push(morse_char);


  }
  let char_array = [];

  for (let i = 0; i < morse_char.length; i++) {

    for (let j=0; j<morse_char[i].length; j++) {

      char_array.push(((MORSE_CODE[morse_char[i][j]])));

      if( j == char_array[i] -1) {
        char_array.push(' ');
      }

    }
  }
  return char_array.toString().trim().replace(/,/g, '');

}
module.exports = morse;
