const body = document.querySelector("body");

const IMG_NUMBER = 3;


function paintIamge(imgNumber){
    const image = new Image();
    image.src=`images/${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
    // image.addEventListener("Loadend");
}


function getRandom(){
    const number = Math.floor(Math.random(   )*IMG_NUMBER);
    //Math 클래스 많은 메소드 있음. 
    // floor은 내림, Math.ceil 은 올림 Math.random은 랜덤으로 숫자 받기 ()*NUMBER 하면 
    //Number만큼 숫자 받음. 
    return number;
}

function init(){
    const randomNumber = getRandom();
    paintIamge(randomNumber);
}

init();