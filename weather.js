const API_KEY = "c9cb48a62f59bca9a9b21b2d5e77edd4";
const COORDS =  'coords';



function getWeather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`)
.then(function(response){
    return response.json();
})
    .then(function(json){
    const temperature = json.main.temp;
    const place = json.name;
    getWeather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCords(cordsObj){
    localStorage.setItem(COORDS,JSON.stringify(cordsObj));
}

function handleGeoSucess(position){
    const latitude = position.COORDS.latitude; //위도
    const longitude = position.COORDS.longitude; //경도
    const coordsObj={
        latitude : latitude, //키값과 value값이 같을 때에는 longtitude처럼 생략 가능 
        longitude
    };
    saveCords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log("Can't access geo location");
}


function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucess, handleGeoError);
    //navigator도 많은 API를 갖고 있음 
    //getCurrentPosition(성공할 시 실행, 실패할 시 실행)
}


function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();