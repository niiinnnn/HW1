//მაგალითი 1

let element = 100;
if (element < 50 ) {
    console.log ("ნაკლებია 50-ზე");
}
if (element > 20) {
    console.log ("მეტია 20-ზე");
}
else {
    console.log ("შეცდომა");
} 
let result=element<50 ? "ნაკლებია 50-ზე ": element>20 ? "მეტია 20-ზე": "შეცდომა"
console.log(result);


//მაგალითი 2

let username = "მარიამი";
if (username = "მარიამი") {
    console.log("true")
}
else{
    console.log("false");
}

let result2 = username= "მარიამი"? "true":"false"
console.log(result2);



//მაგალითი 3

let UserName = "მარიამი" ;
switch (UserName) {
    case "მარიამი" :
    console.log ("true");
    break;
    default:
    console.log("false");
}
