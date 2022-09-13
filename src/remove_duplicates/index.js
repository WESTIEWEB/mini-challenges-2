function removeDuplicates(obj) {

    const newObjct = {};
    let check_parameter = new Set(); //since set takes only non repeated characters, this will be used as a filter 

    let obj_key = Object.keys(obj); //our program demands that the result should be such that the key priority is in descending order
    obj_key.sort().reverse()

    //since we need to check for each instance of our object key, the values appear ones, and not repeated 
    //in the succeeding key-value pair , we have to properly do that using a loop
    for(let key of obj_key) {

        //this iterate through the values of the given object
        for(let value of obj[key]) {

            //this line check if the the value is already taken
            if(!check_parameter.has(value)) {

                newObjct[key] =  [...(newObjct[key] || []), value]
                check_parameter.add(value)

                // if(value.length >1) {

                //     check_parameter.add(value);

                // // console.log(newObjct);
                // }

                // if (value.length < 1) {
                //     check_parameter.add([]);
                // }
                
            }
        }
    }

    return newObjct;


  
    
}


module.exports = removeDuplicates;
