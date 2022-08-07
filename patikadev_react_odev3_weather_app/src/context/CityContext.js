import { createContext, useState } from "react";

const CityContext = createContext()

export const CityProvider = ({ children }) => {
    const [city, Setcity] = useState("istanbul")
    const [weather, Setweather] = useState([])
    const [isLoading1, setIsLoading1] = useState(true)
    const [isLoading2, setIsLoading2] = useState(true)
    const [isLoading3, setIsLoading3] = useState(true)
    const [isLoading4, setIsLoading4] = useState(true)
    const [isLoading5, setIsLoading5] = useState(true)
    const [isLoading6, setIsLoading6] = useState(true)
    const [isLoading7, setIsLoading7] = useState(true)
    const [w1, Setw1] = useState([])
    const [w2, Setw2] = useState([])
    const [w3, Setw3] = useState([])
    const [w4, Setw4] = useState([])
    const [w5, Setw5] = useState([])
    const [lat, Setlat] = useState([])
    const [lon, Setlon] = useState([])
    const values = {
        city,
        Setcity,
        w1,
        Setw1,
        w2,
        Setw2,
        w3,
        Setw3,
        w4,
        Setw4,
        w5,
        Setw5,
        weather,
        Setweather,
        isLoading1,
        setIsLoading1,
        isLoading2,
        setIsLoading2,
        isLoading3,
        setIsLoading3,
        isLoading4,
        setIsLoading4,
        isLoading5,
        setIsLoading5,
        isLoading6,
        setIsLoading6,
        isLoading7,
        setIsLoading7,
        Setlat,
        lat,
        Setlon,
        lon
    }
    return <CityContext.Provider value={values}>{children}</CityContext.Provider>
}
export default CityContext