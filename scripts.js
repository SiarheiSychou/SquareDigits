function squareDigits(num) {
    let numArr = (""+num).split("").map(Number)
    for (let i = 0; i < numArr.length; i++) { 
        numArr[i] = numArr[i] ** 2;
    }
    num = +numArr.join('');
    return num;
}