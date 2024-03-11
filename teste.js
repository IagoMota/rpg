function createArray() {
    const myArray = [0, 12, 31, 4015, 23, 5, 5, 12, 3, 0, 1, 1, 10, 2, 1, 3, 12];
    return myArray;
}
function checkArray(myArray) {
    const result = []
    let counter = 0;
    while (counter < myArray.length) {
        if (myArray[counter] > 5) {
            result.push(myArray[counter])
        }
        counter = counter + 1;
    }
    
    return result;
}

checkArray()