import React, { useContext, useEffect } from 'react'
import "../App.css"
import CityContext from '../context/CityContext'

function WeatherDesign() {

  const { city, Setcity } = useContext(CityContext)

  const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  const day = today.getDay()
  console.log(day)
  const firstDay = week[day]
  const secondDay = week[((day + 1) % 7)]
  const thirdDay = week[((day + 2) % 7)]
  const fourthDay = week[((day + 3) % 7)]
  const fifthDay = week[((day + 4) % 7)]
  const data = useContext(CityContext)
  const tmp = data.weather.list
  useEffect(() => {
    if (data.isLoading === true) {
      const weatherData = data.weather.list
      console.log(data.isLoading)
    } else {
      return
    }
  }, [data.isLoading])

  return (
    <div >
        <ul>
          {data.isLoading1 ? <div>LOADING.....</div> :
          
          <li style={{border:"1px solid"}}><p>
          
            {firstDay}</p><p><img src={`${data.w1.weather[0].main}.png`} /></p><p>{parseInt(data.w1.main.temp_max - 273.15)}  {parseInt(data.w1.main.temp_min - 273.15)}
          
            </p></li>}
            {data.isLoading2 ? <div>LOADING.....</div> :
          <li><p>
            
            {secondDay}</p><p><img src={`${data.w2.weather[0].main}.png`} /></p><p>{parseInt(data.w2.main.temp_max - 273.15)}  {parseInt(data.w2.main.temp_min - 273.15)}
            
            </p></li>}
          {data.isLoading3 ? <div>LOADING.....</div> :
          <li><p>
            
            {thirdDay}</p><p><img src={`${data.w3.weather[0].main}.png`} /></p><p>{parseInt(data.w3.main.temp_max - 273.15)}  {parseInt(data.w3.main.temp_min - 273.15)}
            
            </p></li>}
          {data.isLoading4 ? <div>LOADING.....</div> :
          <li><p>
            
            {fourthDay}</p><p><img src={`${data.w4.weather[0].main}.png`} /></p><p>{parseInt(data.w4.main.temp_max - 273.15)}  {parseInt(data.w4.main.temp_min - 273.15)}
            
            </p></li>}
          {data.isLoading5 ? <div>LOADING.....</div> :
          <li><p>
            
            {fifthDay}</p><p><img src={`${data.w5.weather[0].main}.png`} /></p><p>{parseInt(data.w5.main.temp_max - 273.15)}  {parseInt(data.w5.main.temp_min - 273.15)}
            
            </p></li>}
        </ul>
    </div>
  )
}

export default WeatherDesign