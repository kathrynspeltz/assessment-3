

function serveBtn1() {
    alert("Kathryn's favorite color is green")
}

function serveBtn2() {
    alert("Kathryn's favorite place is New Zealand")
}
function serveBtn3() {
    alert("Kathryn's favorite rituals are Christmas traditions")
}

function handleSubmit(evt) {
    evt.preventDefault();

    alert('Thank you for your suggestion!');

}
let form = document.querySelector('#jobReccos');

form.addEventListener('submit', handleSubmit);

document.getElementById("color").addEventListener("click", serveBtn1)

document.getElementById("place").addEventListener("click", serveBtn2)

document.getElementById("ritual").addEventListener("click", serveBtn3)