async function search(){
    let a = document.getElementById('cityInput').value 
   // console.log(a);

    const key ='607da1a66d5b47d90fa8ca78f734f71f'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=${key}&units=metric`;
    let res = await fetch(url)
    let data = await res.json();
    console.log(data);
    document.querySelector('.box h3').innerHTML=`Temp - ${data.main.temp}℃`;
    document.querySelector('.box h4').innerHTML=`${data.name}`;
    document.getElementById('humidity').innerHTML=`Humidity: ${data.main.humidity}%`;
    document.getElementById('wind').innerHTML = `wind Speed: ${data.wind.speed} m/s`;
    

    let windSpeed = data.wind.speed * 3.6;
    document.getElementById('wind').innerHTML =`Wind Speed: ${windSpeed.toFixed(1)} km/h`;

    const images=[
        { images:'images/images.jpg'},
        { images:'images/cloud.jpg'},
        { images:'images/rain.jpg'},
        { images:'images/windy.jpg'},
            
        
    ]}
                

    
     






