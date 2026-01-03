const input = document.getElementById("input")

function reverseString(str) {
    return str.split("").reverse().join("")
}

function check(){
    const value = input.value
    const reverse = reverseString(value)

    alert(value === reverse ? "PALINDROME" : "not today!")

    input.value = ""
}