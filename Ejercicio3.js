function replaceLastWord(phrase, word) {
    let ph = phrase.slice(0,phrase.lastIndexOf(" "));
   return ph + " " + word;
}