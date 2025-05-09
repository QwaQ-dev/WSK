const inp = document.querySelector(".inp")
const outp = document.querySelector(".outp")
const btn = document.querySelector(".calc")

btn.addEventListener("click", (e) => {
    let inpParse = inp.value

    const words = inpParse.split(" ")

    words.sort((a, b) => b.length - a.length)

    printMsg(words[0])
})


function printMsg(word) {
    outp.innerHTML = `The longest word is ${word}`
}