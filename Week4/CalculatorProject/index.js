var div1 = document.getElementById("div1")
var div2 = document.getElementById("div2")
var div3 = document.getElementById("div3")

var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")
var input3 = document.getElementById("input3")
var input4 = document.getElementById("input4")
var input5 = document.getElementById("input5")
var input6 = document.getElementById("input6")

var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")
var button3 = document.getElementById("button3")

button1.addEventListener('click', event => {
var result = Number(input1.value) + Number(input2.value)
console.log(result)
div1.append(result)
})

button2.addEventListener('click', event => {
var result = Number(input3.value) - Number(input4.value)
console.log(result)
div2.append(result)
})

button3.addEventListener('click', event => {
var result = Number(input5.value) * Number(input6.value)
console.log(result)
div3.append(result)
})  