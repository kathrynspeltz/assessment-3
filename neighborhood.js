function restaurantGenerator() {
    const rest = ["Spoon and Stable", "Demi", "Italian Eatery", "Bar la Grassa", "Rosalia", "Red Rabbit"];

    const random = Math.floor(Math.random() * rest.length)

    alert(`Your surprise restaurant is ${rest[random]} !!`)
}

document.getElementById("restaurantGenerator").addEventListener("click", restaurantGenerator)


