
function processArray(array) {
    return array.map(num => {
        if (num % 2 === 0) {
          return num * num; // even numbers are squared 
        } else {
          return num * 3; // odd numbers are trippled
        }
      });
} // ussage of arrow function syntax

