
document.todoform.addEventListener('submit', function(e) {
    e.preventDefault()

    var title = document.getElementById('title').value
    var description = document.getElementById('description').value
    var items = document.getElementById('items')

    var myDiv = document.createElement('div')
    var titleSpan = document.createElement('span')
    var descSpan = document.createElement('span')
    var delSpan = document.createElement('span')
    var delBtn = document.createElement('button')

    delBtn.textContent = 'Delete'

    delBtn.addEventListener('click', function() {
        myDiv.remove()
    })

    myDiv.style.width = '300px'
    myDiv.style.padding = '10px'
 
    titleSpan.style.fontWeight = 'bold'
    descSpan.style.display = 'block'

    titleSpan.innerText = title
    descSpan.innerText = description

    myDiv.appendChild(titleSpan)
    myDiv.appendChild(descSpan)

    delSpan.appendChild(delBtn)
    myDiv.appendChild(delSpan)

    items.appendChild(myDiv)

    document.todoform.title.value = ''
    document.todoform.description.value = ''
})