// let key="24ffa2a5d3789c235bba05bf637f7c93"
// let api="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let fetchData= async()=>{
        let key="24ffa2a5d3789c235bba05bf637f7c93"
        let place=document.querySelector("#searchlocation").value
        let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`)
        let finalOutput=await data.json()
        console.log(finalOutput)
        let tempValue=document.querySelector(".temp_value")
        let humidValue=document.querySelector(".humid_value")
        let weatherCondition=document.querySelector("#weather_condition")
        let locationName=document.querySelector("#loc")

        let finalTemp=Math.round(finalOutput.main.temp-273)
        let finalHumid=(finalOutput.main.humidity)
        let finalCondition=(finalOutput.weather[0].main).toUpperCase()
        // console.log(finalOutput.name)
        let finalLocation=(finalOutput.name).toUpperCase()

        tempValue.innerHTML=`${finalTemp}<sup>0</sup>C`
        humidValue.innerHTML=`${finalHumid}kmph`
        weatherCondition.innerHTML=`${finalCondition}`
        locationName.innerHTML=`${finalLocation}`


        let weatherImage=document.getElementById("img")
        let bgcImage=document.getElementById("main_container")
        let cardContainer=document.getElementById("card_container")
        let button=document.getElementById("btn")

        switch((finalCondition).toLowerCase()){
            case "rain":
                weatherImage.src='./asserts/rain.jpeg'
                bgcImage.style.backgroundImage="url(./asserts/raingif.gif)"
                cardContainer.style.boxShadow="5px 5px 3px rgb(3, 245, 4),-5px -5px 3px rgb(3, 245, 4)"
                button.style.backgroundColor="rgb(46, 233, 50)"
                break;
                
            case "dust":
                weatherImage.src='./asserts/dust.webp'
                bgcImage.style.backgroundImage="url(./asserts/dustgif.gif)"
                cardContainer.style.boxShadow="5px 5px 3px rgba(255, 255, 255, 0.795),-5px -5px 3px rgba(255, 255, 255, 0.795)"
                break;

            case "clouds":
                weatherImage.src='./asserts/Clouds.webp'
                bgcImage.style.backgroundImage="url(./asserts/clouds_bgcgif.gif)"
                cardContainer.style.boxShadow="5px 5px 3px lightblue,-5px -5px 3px lightblue"
                break;

            case "snow":
                weatherImage.src='./asserts/snow-weather.avif'
                bgcImage.style.backgroundImage="url(./asserts/snowgif.gif)"
                cardContainer.style.boxShadow="5px 5px 3px rgb(110, 105, 105),-5px -5px 3px rgba(110,105,105)"
                button.style.backgroundColor="rgb(110, 105, 105)"
                
                break;

            case "haze":
                weatherImage.src='./asserts/haze.jpg'
                bgcImage.style.backgroundImage="url(./asserts/hazegif.gif)"
                cardContainer.style.boxShadow="5px 5px 3px rgba(255, 255, 255, 0.795),-5px -5px 3px rgba(255, 255, 255, 0.795)"
                button.style.backgroundColor="chocolate" //rgb(210, 101, 23)
                break; 

            case "thunderstorm":
                weatherImage.src='./asserts/thunder.jpg'
                bgcImage.style.backgroundImage="url(./asserts/thunder.gif)"
                cardContainer.style.boxShadow="5px 5px 3px rgba(255, 255, 255, 0.795),-5px -5px 3px rgba(255, 255, 255, 0.795)"
                break;

            default:
                weatherImage.src='./asserts/favIcon.png'  
                bgcImage.style.backgroundImage="url(./asserts/weather_background12345.avif)"      
        }
        
    }
    fetchData()

})