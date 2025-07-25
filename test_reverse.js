// Test file to debug the reverseSentence function
const fs = require('fs');

// Load the function
const code = fs.readFileSync('reversedSentence.js', 'utf8');
eval(code);

// Test cases
const testCases = [
    'Hello world, how are you?',
    'This is a test.',
    'No punctuation here',
    'Multiple words with exclamation!',
    'NASA has landed on Mars.',
    'Today, I bought a new car, and it was $2,300.',
    'How are you today?',
    'I visited Ethopia last year.',
    'Hurray!']

console.log('Testing reverseSentence function:\n');

testCases.forEach((test, index) => {
    console.log(`Test ${index + 1}:`);
    console.log(`Input:  "${test}"`);
    try {
        const result = reverseSentence(test);
        console.log(`Output: "${result}"`);
    } catch (error) {
        console.log(`Error:  ${error.message}`);
    }
    console.log('---');
});
