
const bar = document.getElementById("bar");
const hiddenMenu = document.getElementById("hidden");

bar.addEventListener("click", function() {
    // Toggle the display of the hidden menu
    if (hiddenMenu.style.display === "none" || hiddenMenu.style.display === "") {
        hiddenMenu.style.display = "flex";
    } else {
        hiddenMenu.style.display = "none";
    }
});
let numberElement = document.getElementById('num'); // Get the element to display the number
let currentNumber = 0  

function startIncrement() {
 let interval =    setInterval(function() {
        currentNumber++;  
      numberElement.innerText= "+" +currentNumber;
        if(currentNumber === 3892){
            clearInterval(interval)
        }
    }, 5);  
}
startIncrement()
let numberElement2 = document.getElementById('num2'); // Get the element to display the number
let currentNumber2 = 0  

function startIncrement2() {
 let interval =    setInterval(function() {
        currentNumber2++;  
      numberElement2.innerText= "+" +currentNumber2;
        if(currentNumber2 === 3892){
            clearInterval(interval)
        }
    }, 5);  
}
startIncrement2()
