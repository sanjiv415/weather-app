import React, { useEffect, useState } from "react"
import axios from 'axios'
import "./weather.css"

function Weather(){
    const[city,setcity] = useState(null)
    const[search,setsearch] = useState("delhi")
    
    async function getData(){
        // const api = `https://api.openweathermap.org/data/2.5/weather?q=indore&appid=f72f8b725ea9445f09c5072910bf8c6d`

        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${search}&appid=f72f8b725ea9445f09c5072910bf8c6d`)
        const response  = await res.json()
        console.log(response.main);
        setcity(response.main)
        
        
    }

    useEffect(()=>{
        getData()
    },[search])

    return(
        <>
    
          <div className="box">
           
            <div className="input">
              <input
                placeholder="enter city..."
                className="inputField"
                value={search}
                onChange={(event)=>{
                 setsearch(event.target.value)
                }}

              
              />
            </div>
            <div className="image">
                <img src="https://cdn-icons-png.flaticon.com/128/9361/9361662.png" alt="img"/>
            </div>
         {!city?(
            <p className="error">no data found</p>
         ):(
            <>
                <div className="info">
                <h1 className="tem">{city.temp}°C<span className="city"> : {search}</span></h1>

               
            </div>
            <div className="info2">
                <span className="min">min-Tem : {city.temp_max}°C</span>
                <span className="max">max-Tem : {city.temp_min}°C</span>
                <span className="humidity">humidity : {city.humidity}%</span>
            </div>
            </>
         )}  

          </div>
        
        </>
    )
}

export default Weather;