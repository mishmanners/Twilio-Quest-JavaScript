// reverse a sentence
// make the start of the new sentence uppercase
// no other uppercase letters in the new sentence
// punctation remains at the end of the sentence

function reverseSentence(sentence) {
    // let's make the first letter of the current sentence uppercase
    sentence = sentence.toLowerCase();
    // let's remove the punctuation at the end of the sentence
    const punctuation = sentence.match(/[.,!?;:]\*$%^&*()_+={}\[\]\\|<>\/?]/);
    sentence = sentence.replace(/[.,!?;:]\*$%^&*()_+={}\[\]\\|<>\/?]$/, '');
    // let's split the sentence into words
    const words = sentence.split(' ');
    // let's reverse the words
    const reversedWords = words.reverse();
    // let's join the words back into a sentence
    let newSentence = reversedWords.join(' ');
    // let's add the punctuation to the end of the sentence
    newSentence = newSentence + punctuation;
    // let's make the first letter of the new sentence uppercase
    newSentence = newSentence.charAt(0).toUpperCase() + newSentence.slice(1);
    return newSentence;
}