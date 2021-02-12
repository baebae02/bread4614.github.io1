const title = document.querySelector("#title");

// const BASE_COLOR="#34495e";
// const OTHER_COLOR="#7f8c8d";

const CLICKED_CLASS="clicked";

//handClick이라는 함수, currentClass라는 상수는 title객체의 className
//콘솔로그창에 currentclass를 띄워라
function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if(!hasClass){
    //     title.classList.add(CLICKED_CLASS);
    // }else{
    //     title.classList.remove(CLICKED_CLASS);
    // }
}

// function handleClick(){
//     const currentColor= title.style.color;
//     if(currentColor===BASE_COLOR){
//         title.style.color=OTHER_COLOR;
//     }else{
//         title.style.color=BASE_COLOR;
//     }
// }

function init(){
   
    title.addEventListener("click", handleClick);
    
}

init();

// function handleOffline(){
//     console.log("lalala");
// }
// function handleOnline(){
//     console.log("lalalala");
// }

// window.addEventListener("offline", handleOffline);
// window.addEventListener("online", handleOnline);