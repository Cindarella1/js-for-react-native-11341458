# js-for-react-native-11341458

# Simple Array Manipulation Project using JavaScript

**Student ID:** [11341458]

This project contains JavaScript files for array manipulation tasks.

## Tasks:

### Task 1: processArray function
- File: arrayManipulation.js
- Description: Implements a function called `processArray` that takes an array of numbers as input and returns a new array where each even number is squared and each odd number is tripled.

### Task 2: formatArrayStrings function
- File: arrayManipulation.js
- Description: Implements a function called `formatArrayStrings` that takes two arrays as arguments: an array of strings and an array of numbers processed by the `processArray` function. It modifies each string based on its corresponding number, capitalizing the string if the number is even and converting it to lowercase if the number is odd.

### Task 3: createUserProfiles function
- File: userInfo.js
- Description: Implements a function called `createUserProfiles` that takes an array of names and the array of modified names from Task 2. It returns an array of objects, each containing the originalName, modifiedName, and an auto-incremented ID starting from 1.

## Usage:
- You can import and use these functions in other JavaScript files by requiring them:
```javascript
const { processArray, formatArrayStrings } = require('./arrayManipulation');
const { createUserProfiles } = require('./userInfo');
