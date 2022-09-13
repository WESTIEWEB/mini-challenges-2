function isolateDuplicates(text) {

    if (typeof text != "string") {
      throw "Please enter a valid string";
    }
    let char_container
     = [];
    let duplicate_characters = 0;
    let char_count = 0;                                         //this line is an identifier for the number of time a char is repeated
    text = text.split("");

    for (let i = 0; i < text.length; i++) {

      char_container.push(text[i]);                             //this iterate through the input parameter and create a list of each items of the input

      if (                                                      // in this block, we check if there exist a repeating alphabet character that is if a character is succeeded  
          text[i + 1] != undefined &&                           // by its kind, and compares if the one at ith index is same as that in i+1 index
          text[i].toLowerCase() == text[i + 1].toLowerCase()    // here we try to catch all cases where the characters of the input paramete are upper cases, and conver them to lower case alphabets
          ) {

          duplicate_characters ++;              //if the above conditionn is true, then increment the duplicate by 1
          
          if ( duplicate_characters== 2) {      //i.e if a character appears twice push an opening square bracket to the character container array

              char_container.push("["); 
              char_count++;                     // whenever we receive duplicate character, increment the count;
          }
      } 
        
      else if (                                 // the above case check for a case where text[i] === text[i+1]; here is a case when text[i] !== text[i+1]
          (text[i + 1] != undefined &&
          text[i].toLowerCase() !== text[i + 1].toLowerCase()) ||
          i == text.length - 1
        ) {

          if ( duplicate_characters > 1) {

              char_container
              .push("]");
          }

          duplicate_characters = 0;
        } 
    }

    return [char_container
      .join(""), char_count];
}
module.exports = isolateDuplicates;
