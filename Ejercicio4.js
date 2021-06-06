function sumAges(firstUserPhrase, SecondUserPhrase, ThirdUserPhrase){
    let first = (firstUserPhrase);
    let second = (SecondUserPhrase);
    let the = (ThirdUserPhrase);
    let array1 = first.split(" ");
    let array2 = second.split(" ");
    let array3 = the.split(" ");

    let a = array1[array1.length - 2];
    let b = array2[array2.length - 2];
    let c =array3[array3.length - 2];

    //console.log(Number(a)+Number(b)+Number(c));
    return (Number(a)+Number(b)+Number(c));
}