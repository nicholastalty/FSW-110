var newListItem = document.createElement('li')
var myList = document.getElementById('my-list')
myList.prepend(newListItem)
newListItem.textContent = 'Numbers'

var newPara = document.createElement('p')
newPara.textContent = 'I love Bryan University!'
document.body.appendChild(newPara)
newPara.style.textAlign = 'center'
newPara.style.fontSize = '35px'