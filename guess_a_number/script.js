let easy = document.querySelector(".easy")
let medium = document.querySelector(".medium")
let hard = document.querySelector(".hard")
let inputValue = document.getElementById("myInput")
let guessBox = document.querySelector(".guess-box")
let imgBox = document.querySelector(".image-box")
let checkButton = document.querySelector(".check-btn")


easy.addEventListener("click", () => {
    let num = Math.floor(Math.random() * 10) + 1
    console.log(num)
    let count = 5
    const para = document.createElement("p");
    para.textContent = "Pick a number between 1 and 10. You have 5 chances."
    guessBox.appendChild(para)
    checkButton.addEventListener("click", () => {
        guess(num)
        count--

        if(count === 0){
            let img = document.createElement("img");
            guessBox.replaceChildren()
            para.textContent = "You run out of chances"
            para.style.color = "red";
            img.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmNyMGllaDk1M2prcjI3cDJ0czVlNnEyN2U1NWlqZjF2eGQ0eDh4ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Us5BPP2m30VwPgI9qM/giphy.gif"
            guessBox.appendChild(para)
            imgBox.appendChild(img)
        }
})
})


medium.addEventListener("click", () => {
    let num = Math.floor(Math.random() * 101) + 1
    let count = 5
    console.log(num)
    const para = document.createElement("p");
    para.textContent = "Pick a number between 1 and 100. You have 5 chances."
    guessBox.appendChild(para)
    checkButton.addEventListener("click", () => {
        guess(num)
        count--

        if(count === 0){
            let img = document.createElement("img");
            guessBox.replaceChildren()
            para.textContent = "You run out of chances"
            para.style.color = "red";
            img.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmNyMGllaDk1M2prcjI3cDJ0czVlNnEyN2U1NWlqZjF2eGQ0eDh4ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Us5BPP2m30VwPgI9qM/giphy.gif"
            guessBox.appendChild(para)
            imgBox.appendChild(img)
        }
})
})


hard.addEventListener("click", () => {
    let num = Math.floor(Math.random() * 500) - 500
    console.log(num)
    let count = 5
    const para = document.createElement("p");
    para.textContent = "Pick a number between -500 and 500. You have 5 chances."
    guessBox.appendChild(para)
    checkButton.addEventListener("click", () => {
        guess(num)
        count--

        if(count === 0){
            let img = document.createElement("img");
            guessBox.replaceChildren()
            para.textContent = "You run out of chances"
            para.style.color = "red";
            img.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmNyMGllaDk1M2prcjI3cDJ0czVlNnEyN2U1NWlqZjF2eGQ0eDh4ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Us5BPP2m30VwPgI9qM/giphy.gif"
            guessBox.appendChild(para)
            imgBox.appendChild(img)
        }
})
})


function guess(num){
    const span = document.createElement("span");
    let img = document.createElement("img");
    if (isNaN(inputValue.value)) {
        span.textContent = "Please enter a valid number!";
        span.style.color = "red";
    } else if (inputValue.value > num) {
        span.textContent = `It's lower than ${inputValue.value}`;
    } else if (inputValue.value < num) {
        span.textContent = `It's higher than ${inputValue.value}`;
    } else {
        guessBox.replaceChildren()
        checkButton.disabled = true
        span.textContent = `Congratulations! You guessed the correct number: ${num}`;
        span.style.color = "green";
        img.src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjhiZzk1YWFrZjBsc2ZobDJ2NXgxeDZsbW13N201Mm4xOTNkNHNiZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26u4cqiYI30juCOGY/giphy.gif"

    }
    
    guessBox.appendChild(span)
    imgBox.appendChild(img)
}


