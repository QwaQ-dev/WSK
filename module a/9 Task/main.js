function getTwoLargest(array) {
    const sortedArr = array.tiSorted((a, b) => b - a)

    const sum = sortedArr[0] + sortedArr[1]

    return sum
}