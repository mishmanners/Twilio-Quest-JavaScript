// reverse a sentence
// make the start of the new sentence uppercase
// no other uppercase letters in the new sentence
// punctutation should go at the end of the new sentence

function reverseSentence(sentence) {
    // let's find and remove the punctuation at the end of the sentence
    const punctuationMatch = sentence.match(/[.,!?;:]+$/);
    const punctuation = punctuationMatch ? punctuationMatch[0] : '';
    const sentenceWithoutPunctuation = sentence.replace(/[.,!?;:]+$/, '');
    
    // let's split the sentence into words
    const words = sentenceWithoutPunctuation.split(' ');
    
    // Process each word: preserve proper nouns, "I", and special characters
    const processedWords = words.map(word => {
        // Keep special characters like $ intact
        const specialChars = word.match(/[$€£¥]/g);
        if (specialChars) {
            return word;
        }
        // Keep "I" capitalized and preserve words that are all caps (like NASA)
        if (word === 'I' || word === word.toUpperCase()) {
            return word;
        }
        // Check if it's a proper noun (starts with capital letter)
        if (word.charAt(0) === word.charAt(0).toUpperCase() && word.length > 1) {
            // Keep proper nouns capitalized
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        // Convert regular words to lowercase
        return word.toLowerCase();
    });
    
    // let's reverse the words
    const reversedWords = processedWords.reverse();
    
    // Process the reversed words to handle capitalization correctly
    const finalWords = reversedWords.map((word, index) => {
        if (index === 0) {
            // First word should be capitalized
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        } else {
            // Other words: preserve special cases but lowercase the first letter if it's a regular word
            if (word === 'I' || word === word.toUpperCase() || word.match(/[$€£¥]/g)) {
                return word;
            }
            // For other words, make sure first letter is lowercase unless it's a proper noun that should stay capitalized
            return word.charAt(0).toLowerCase() + word.slice(1);
        }
    });
    
    // let's join the words back into a sentence
    let newSentence = finalWords.join(' ');
    
    // let's add the punctuation to the end of the sentence
    newSentence = newSentence + punctuation;
    
    return newSentence;
}