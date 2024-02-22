// you should use this with html and css
let object = document.querySelector("#name");

function base(){
    let string=["Dental Clinical Square","SUPPORTED BY KOREC"
    ,"SEOKHWAN KIM","Dental Clinical Square"];
    let StringSelected= string[Math.floor(Math.random() * string.length)];
    let selectStringArr = StringSelected.split("");
    
    return selectStringArr;
}


// print out one letter
function motion(letter){

    console.log(letter); //check in console of browser
    if(letter.length>0){
        object.textContent +=letter.shift();
        setTimeout(function(){
            motion(letter);

        },80)
    }
    else{
        setTimeout(clear, 3000);
    }
}

function clear(){
    object.textContent=" ";
    motion(base());
}

motion(base());

//blink effect
function blink(){
    object.classList.toggle("active");
}
setInterval(blink,400);
