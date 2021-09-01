// var person ={name: 'patrick'}
// person.name = 'morgan'
// console.log(person)


// var heading = document.getElementById('heading')
// console.log(Object.keys(heading.style))
// heading.style.backgroundColor = 'lightblue'


//className
var head = document.getElementById('heading')
// head.className += ' new-class'
// console.log(heading.className)

//classList
heading.classList.toggle('new-class')
console.log(head.className)
heading.classList.add('new-class')
console.log(head.className)