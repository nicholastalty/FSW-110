// Object.keys(window).forEach(key => {
//     if (/^on/.test(key)) {
//         window.addEventListener(key.slice(2), event => {
//             console.log(event.type);
//         });
//     }
// });


function handleButtonClick() {
    console.log('button clicked')
}

const button = document.getElementById('button')

button.addEventListener('click', handleButtonClick)



document.getElementById("header").addEventListener("dblclick", function() {
    document.body.style.backgroundColor = "firebrick"
})