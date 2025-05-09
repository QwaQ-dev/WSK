function shiftedDiff(firstString, secondString) {

    if(firstString.length !== secondString.length) {
        return -1
    }

    return (secondString + secondString).indexOf(firstString)
}

console.log(shiftedDiff("fatigue", "tiguefa"))
console.log(shiftedDiff("coffee", "eecoff"))