function isolateDuplicates(text) {

    if(typeof(text) === String) {
        return "Please Enter a valid string";
    }

    text = text.split(" ");

    for (char of MORSE_CODE) {
        console.log(char);
    }
}

module.exports = isolateDuplicates;
