import React from 'react'
import ApiProvider from './ApiProvider'
import {CityProvider} from '../context/CityContext'
import WeatherDesign from './WeatherDesign'

function Main() {
  return (
    <CityProvider value="istanbul">
        <ApiProvider/>
        <WeatherDesign/>
    </CityProvider>
  )
}

export default Main