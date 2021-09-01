var nav = document.createElement('nav')
nav.textContent = "Information "
document.body.appendChild(nav)
nav.style.color = "green"

console.log(nav)


var h1 = document.createElement('h1')
h1.textContent = "Learning Javascript"
document.body.appendChild(h1)
h1.style.color = "red"



var ul = document.createElement('ul')
document.body.appendChild(ul)


var li = document.createElement('li')
li.textContent = "Learning Javascript can be quite a challenge, but with the right tools and teachers you can be learing Javascript in weeks."
ul.appendChild(li)



var p = document.createElement('p')
p.textContent = "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points."
document.body.appendChild(p)


var footer = document.createElement('footer')
footer.textContent = "This is my footer."
document.body.appendChild(footer)
