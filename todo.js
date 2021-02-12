const toDoForm=document.querySelector(".js-toDoForm"), 
toDoInput=toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

/*
querySelecor : 해당 클래스,아이디, 태그에 맞는 첫번째 자손 불러오기  
document(html 문서)에서 querySelector로 클래스명이 js-toDoForm인 애를 불러와서 상수 toDoForm로 정의(like allocation)
toDoForm에서 input 태그를 가진 첫번째 자손을 불러와서 toDoInput이라고 정의
document문서에서 클래스명이 js-toDoList인 애를 불러와서 toDoList에 저장(정의)
*/


const TODOS_LS = 'toDos';

let toDos=[];
//toDos라는 빈 리스트 만들어주기

//----------------------------------------------------------------------------------------------------------------


//삭제하기
function deleteToDo(event){
    const btn = event.target;  //어디서 event가 발생했나
    const li = btn.parentNode; //그 btn의 부모 노드는 누군가 즉 몇번째 리스트가 눌러졌나
    toDoList.removeChild(li); //toDoList에서 li번째 내용을 삭제한다
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos=cleanToDos;
    saveToDos();
}


//저장하기
function saveToDos(){
    // localStorage.setItem(TODOS_LS,toDos);
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
    //localStorage에 데이터 추가하기. 키 = "TODOS_LS", 값 = "toDos" 
    //JSON.stringify는 string을 object로 바꿔주는 역할
    
    // const span = document.createElement("span");
    // const newId = toDos.length+1;

}

//ToDoList 불러오기 
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    //loadedToDos는 localStorage에서 TODOS_LS 키를 가진 값을 불러온다. 즉 "toDos"

    if(loadedToDos !== null){ //만약 불러온 값이 비어있지 않다면, 즉 할일이 있는 상태라면
        const parsedToDos=JSON.parse(loadedToDos); 
        //parsedToDos는 loadedToDos 즉 불러온 할일을 객체로 바꿈 
        // console.log(parsedToDos);

        parsedToDos.forEach(function(toDo){
            paintTodo(toDo.text);
            //parsedToDos(객체로 바꾼 할 일들)의 각각에 대해서 paintToDo라는 function이 실행 
            //원래 paintTodo 함수는 매개변수로 text를 받음 그래서 toDos.text를 넘겨주는 것 
        });

    }
}


//todolist 만들기 
//인자는 text로 받아옴
function paintTodo(text){
    
    //java script로 html 요소 추가하기 
    //html 문서에 li, delBtn, span을 만들어줌
    const li =document.createElement("li");
    const delBtn = document.createElement("button");
    const span =document.createElement("span");
    const newId=toDos.length+1;

    //delBtn에 X를 추가(html text추가)
    delBtn.innerText="❌";
    delBtn.addEventListener("click", deleteToDo);
    //delBtn이 event를 들음. click하면 deleteToDo를 실행함 
    span.innerText=text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id=newId;
    toDoList.appendChild(li);
    const toDoObj={
        text:text, 
        id:newId
    };
    toDos.push(toDoObj);
    saveToDos();

}


function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value="";
}


function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}


init();