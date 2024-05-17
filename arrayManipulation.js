
function processArray(array) {

 if (!Array.isArray(numbersArray) || numbersArray.some(i => typeof i !== 'number' || isNaN(i))) {
    throw new Error("numbersArray must be an array containing only numbers.");
  }  // numbersArray gets authenticated


  return array.map(num => {
     if (num % 2 === 0) {
    return num * num; // even numbers are squared 
    } else {
    return num * 3; // odd numbers are trippled
     }
  });
} // ussage of arrow function syntax


function formatArrayStrings(stringsArray, numbersArray) {
    
 if (!Array.isArray(stringsArray) || stringsArray.some(str => typeof str !== 'string')) {
     throw new Error("stringsArray must be an array containing only strings.");
  } // stringsArray gets verified
    
      
  if (!Array.isArray(numbersArray) || numbersArray.some(i => typeof i !== 'number' || isNaN(i))) {
      throw new Error("numbersArray must be an array containing only numbers.");
   }  // numbersArray gets authenticated
         
      
  if (stringsArray.length !== numbersArray.length) {
     throw new Error("stringsArray and numbersArray must have the same length.");
  } // Check if arrays have same length
    

  let i;
   const formattedStringsArray = [];

   for (i = 0; i < stringsArray.length; i++) {
       const str = stringsArray[i];
       const num = numbersArray[i];

       if (num % 2 === 0) {
           formattedStringsArray.push(str.toUpperCase()); //Strings with even numbers are capitalised
       } else {
           formattedStringsArray.push(str.toLowerCase()); //Strings with odd numbers are changed to lower cases
       }
  }

}


modules.export = {
   processArray,
   formatArrayStrings
};


