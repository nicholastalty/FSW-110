var peopleNames = [
    "Steve",
    "Larry",
    "Joe",
    "Shirley",
    "Steph",
    "Nate",
    "Rick",
    "Emily",
]

var peopleList = document.getElementById("people")

for (var i = 0; i < 10; i++){
    var h1 = document.createElement("h1")
    h1.textContent = 'Hello World'
   h1.style.color = "brown"
    document.body.append(h1)

    
}


for (var i = 0; i < peopleNames.length; i++) {

var newName = document.createElement("li")
newName.textContent = peopleNames[0]

peopleList.innerHTML += '<li>' + peopleNames[i] + '</li>'

}
