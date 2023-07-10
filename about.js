console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();

	alert('form submit successful!');

}

function compliment() {
	alert('You are purrfect!')
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let catImg = document.getElementById('catImage')

catImg.addEventListener('mouseover', compliment)