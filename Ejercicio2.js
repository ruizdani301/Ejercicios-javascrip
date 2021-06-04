function countLastWordLength(phrase) {

    const last = phrase.substring(phrase.lastIndexOf(" ") + 1);
    return   last.length;

}