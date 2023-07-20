function setAmountOfNumbers(array: number[], amount: number) {
    for (let i: number = 0; i <= (amount - 1); i++)
    	array.push(0);
}

function setNumbersToZero(array: number[]) {
    for (let i: number = 0; i < array.length; i++) {
	array[i] = 0
    }
}

function setNumbersToRandomValues0to99(array: number[]) {
    for (let i: number = 0; i < array.length; i++) {
	array[i] = randomDigit() * randomDigit() + randomDigit() + randomDigit()
    }
}

function randomDigit(): number {
    let randomDigit = Math.trunc(Math.random() * 10)
    return randomDigit
}

function printNumbers(array: number[]) {
	console.log(printNumbersInOneLine(array))
}

function printNumbersInOneLine(array: number[]): string {
    let numbersAsText: string = ""
    for (let zahl of array) {
	numbersAsText += zahl.toString()
	numbersAsText += " "
    }
    return numbersAsText
}

function quicksort(array: number[], lowerBound: number, upperBound: number) {
    if (lowerBound < upperBound) {
	let newEndPos: number = partition(array, lowerBound, upperBound)
	quicksort(array, lowerBound, (newEndPos - 1))
	quicksort(array, (newEndPos + 1), upperBound)
    }
}

function partition(array: number[], lowerBound: number,
		   upperBound: number): number {
    let pivot: number = array[lowerBound]
    let startPos: number = lowerBound
    let endPos: number = upperBound
    while (startPos < endPos) {
	while ((array[startPos] <= pivot) && (startPos < (array.length - 1))) {
	    startPos++;
	    console.log('new startPos: ' + startPos);
	}
	while (array[endPos] > pivot) {
	    endPos--;
	    console.log('        new endPos: ' + endPos);
	}
	if (startPos < endPos) {
	    console.log('swap startPos (' + array[startPos]
			+ ') with endPos (' + array[endPos] + '), new array:')
	    let tempEndPos0 = array[endPos]
	    array[endPos] = array[startPos]
	    array[startPos] = tempEndPos0
	    printNumbers(array)
	}
    }
    if (array[lowerBound] != array[endPos]) {
	console.log('swap lowerBound (' + array[lowerBound] +
		    ') with endPos (' + array[endPos] + '), new array:')
	let tempEndPos1 = array[endPos]
	array[endPos] = array[lowerBound]
	array[lowerBound] = tempEndPos1
    }
    printNumbers(array)
    return endPos
}

const MIN_AMOUNT_OF_NUMS: number = 5
const array: number[] = []

setAmountOfNumbers(array, (randomDigit() + MIN_AMOUNT_OF_NUMS))
setNumbersToRandomValues0to99(array)
printNumbers(array)

quicksort(array, 0, (array.length - 1))
