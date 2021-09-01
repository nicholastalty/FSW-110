var head = document.getElementById('heading')

for (var i = 0; i < 5; i++){
    var h2 = document.createElement("h2")
    h2.textContent = 'This is a test message.'
   h2.style.color = "cornflowerblue"
   h2.style.fontWeight = "lighter"
   h2.style.fontFamily = "sans-serif"
    document.body.append(h2)
    h2.classList.add("border");
}