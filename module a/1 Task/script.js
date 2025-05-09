const inp = document.querySelector(".inp")
const outp = document.querySelector(".outp")
const btn = document.querySelector(".calc")

btn.addEventListener("click", (e) => {
    let inpParse = inp.value

    const isPalindrome = checkPalindrome(inpParse)

    printMsg(inpParse, isPalindrome)
})

function checkPalindrome(string) {
    const str = string.split("").reverse().join("")

    return string === str
}

function printMsg(word, isPalimdrome) {
    outp.innerHTML = `The word ${word} is ${isPalimdrome ? "" : "not"} a palindrome`
}