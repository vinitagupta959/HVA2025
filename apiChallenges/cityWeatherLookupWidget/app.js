// https://geocoding-api.open-meteo.com/v1/search?name=jaipur&count=1&language=en&format=json



let cityName=document.getElementById("cityName");
let getWetherBtn=document.getElementById("getWetherBtn");
let weatherDetails=document.getElementById("weatherDetails");
let countryName;
let city;
getWetherBtn.addEventListener('click', async function(){
city=cityName.value.trim();
  try{
   let geoCodeingResponse=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`);
   if(!geoCodeingResponse.ok){
throw new Error("something went wrong whilefetching data")
   }else{
    let getJsonRes=await geoCodeingResponse.json();
    let longitude=getJsonRes.results[0].longitude;
    let latitude=getJsonRes.results[0].latitude;
   countryName=getJsonRes.results[0].country;
    let response=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    if(!response.ok){
      throw new Error("something went wrong whilefetching data")
    }else{
      let data=await response.json();
      displapData(data);
    }
   }
 
  }catch(err){
weatherDetails.innerText=err;
  }

});

function displapData(data){
weatherDetails.innerHTML=`<p>City Name: ${city}</p>
<p>Country : ${countryName}</p>
<p>temperature (°C): ${data.current_weather.temperature}</p>
<p>windspeed: ${data.current_weather.windspeed}</p>`
}
