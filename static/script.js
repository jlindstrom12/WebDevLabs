var x = 7;
var y = 5;
var z = x + y;
var a = "Hello ";
var b = "world!";
var c = a + b;
console.log(c)
if(c.length > z){
    console.log(c);
}
else if(c.length < z){
    console.log(z);
}
else{
    console.log("good job!");
}

function myFirstFunction(x1, x2){
    var x3 = x1 + x2;
    console.log(x3);
}

myFirstFunction(6,28);
myFirstFunction("Helo ", "Javascript");

function GreetingFunction(){

    var t = new Date();
    var h = t.getHours();
    var e = document.getElementById("greeting");
    
    if (h > 5 && h < 12) {
        e.innerHTML = "Good Morning! I am Jonathan Lindstrom";
    } else if (h >= 12 && h < 18) {
        e.innerHTML = "Good Afternoon! I am Jonathan Lindstrom";
    } else if (h >= 18 && h < 20) {
        e.innerHTML = "Good Evening! I am Jonathan Lindstrom";
    } else if ((h >= 20 && h < 24) || (h >= 0 && h < 5)) {
        e.innerHTML = "Good Night! I am Jonathan Lindstrom";
    }

}
GreetingFunction()

var L1 = ["watermelon", "Pineapple", "pear", "banana"];
var L2 = ["apple", "banana", "kiwi", "orange"];

function findTheOrange(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "orange") {
            // alert(`The orange is in array ${arr === L1 ? "L1" : "L2"} in the ${i+1} place`);
        }
    }
}

findTheOrange(L1);
findTheOrange(L2);

//New function in Lab4
function readMore(){
    var readMore = document.getElementById("readMore");
    var moreTxt = document.getElementById("moreTxt");
    var readLess = document.getElementById("readLess");
    readMore.style.display = "none";
    moreTxt.style.display = "inline";
    readLess.style.display = "inline";
}

function readLess(){
    var readMore = document.getElementById("readMore");
    var moreTxt = document.getElementById("moreTxt");
    var readLess = document.getElementById("readLess");
    readMore.style.display = "inline";
    moreTxt.style.display = "none";
    readLess.style.display = "none";
}

function validate() {
    var input1 = document.getElementById("name");
    var input2 = document.getElementById("email");
    var input3 = document.getElementById("comment");

    if (!input1.checkValidity() || !input2.checkValidity() || !input3.checkValidity()) {
        alert("Please complete the form correctly");
    }
}



