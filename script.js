
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
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
const srcinput= document.getElementById("input1")
const dropdown2 =  document.getElementById("dropdown2")
srcinput.addEventListener("focus" ,function(){
dropdown2.style.display="block"

})

  dropdown2.addEventListener('click', (event) => {
   console.log(event.target.closest('.dropdown'))
 if (!event.target.closest('.dropdown')) {
     dropdown2.style.display = 'none';
     
     
 }
 srcinput.addEventListener("click",function(){
    dropdown2.style.display="none"
 })
});

function selectOption(value) {
 srcinput.value = value;
 dropdown2.style.display = 'none';
srcinput.innerHTML=value

}

const button = document.getElementById("button")
const input1 =  document.getElementById("input1") 
button.addEventListener("click" , function(){
    const val = input1.value
    input1.value=""
    if( val == "dptw" ){
        window.location.href= "dptw.html"
        console.log(val)
        return true
    }
    if( val == "influenza" ){
        window.location.href= "influenza.html"
        console.log(val)
        return true
    }
    if( val == "mmr+opr" ){
        window.location.href= ""
        console.log(val)
        return true
    }
    if( val == "typhoid" ){
        window.location.href= "typhoid.html"
        console.log(val)
        return true
    }
    if( val == "cervical cancer" ){
        window.location.href= "cervical.html"
        console.log(val)
        return true
    }
    if( val == "dap/td" ){
        window.location.href= "td.html"
        console.log(val)
        return true
    }
})