import { Formik } from 'formik'
import React, { useContext, useState, useEffect } from 'react'
import CityContext from '../context/CityContext'
import axios from "axios"

function ApiProvider() {
  const { isLoading1, setIsLoading1 } = useContext(CityContext)
  const { isLoading2, setIsLoading2 } = useContext(CityContext)
  const { isLoading3, setIsLoading3 } = useContext(CityContext)
  const { isLoading4, setIsLoading4 } = useContext(CityContext)
  const { isLoading5, setIsLoading5 } = useContext(CityContext)
  const { isLoading6, setIsLoading6 } = useContext(CityContext)
  const { isLoading7, setIsLoading7 } = useContext(CityContext)
  const { city, Setcity } = useContext(CityContext)
  const { weather, Setweather } = useContext(CityContext)
  const { w1, Setw1 } = useContext(CityContext)
  const { w2, Setw2 } = useContext(CityContext)
  const { w3, Setw3 } = useContext(CityContext)
  const { w4, Setw4 } = useContext(CityContext)
  const { w5, Setw5 } = useContext(CityContext)
  const data = useContext(CityContext)
  const { lat, Setlat } = useContext(CityContext)
  const { lon, Setlon } = useContext(CityContext)
  useEffect(() => {
    axios("https://api.openweathermap.org/geo/1.0/direct?q=" + data.city + "&limit=1&appid=d63ec4fba64dabc8a33d4aa5fc2e5e72")
      .then((res) => Setlat(res.data[0].lat))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading6(false))
  }, [data.city])
  useEffect(() => {
    if (data.isLoading6 === false) {
      axios("https://api.openweathermap.org/geo/1.0/direct?q=" + data.city + "&limit=1&appid=d63ec4fba64dabc8a33d4aa5fc2e5e72")
        .then((res) => Setlon(res.data[0].lon))
        .catch((e) => console.log(e))
        .finally(() => setIsLoading7(false))
    }
  }, [data.city, data.isLoading6])
  useEffect(() => {
    if (data.isLoading7 === false) {
      axios("https://api.openweathermap.org/data/2.5/forecast?lat=" + data.lat + "&lon=" + data.lon + "&appid=d63ec4fba64dabc8a33d4aa5fc2e5e72")
        .then((res) => Setw1(res.data.list[8]))
        .catch((e) => console.log(e))
        .finally(() => setIsLoading1(false))
    }
  }, [data.city, data.isLoading7])
  useEffect(() => {
    if (data.isLoading7 === false) {
    axios("https://api.openweathermap.org/data/2.5/forecast?lat=" + data.lat + "&lon=" + data.lon + "&appid=d63ec4fba64dabc8a33d4aa5fc2e5e72")
      .then((res) => Setw2(res.data.list[14]))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading2(false))
      }
  }, [data.city, data.isLoading7])
  useEffect(() => {
    if (data.isLoading7 === false) {
    axios("https://api.openweathermap.org/data/2.5/forecast?lat=" + data.lat + "&lon=" + data.lon + "&appid=d63ec4fba64dabc8a33d4aa5fc2e5e72")
      .then((res) => Setw3(res.data.list[22]))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading3(false))
    }
  }, [data.city, data.isLoading7])
  useEffect(() => {
    if (data.isLoading7 === false) {
    axios("https://api.openweathermap.org/data/2.5/forecast?lat=" + data.lat + "&lon=" + data.lon + "&appid=d63ec4fba64dabc8a33d4aa5fc2e5e72")
      .then((res) => Setw4(res.data.list[30]))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading4(false))
    }
  }, [data.city, data.isLoading7])
  useEffect(() => {
    if (data.isLoading7 === false) {
    axios("https://api.openweathermap.org/data/2.5/forecast?lat=" + data.lat + "&lon=" + data.lon + "&appid=d63ec4fba64dabc8a33d4aa5fc2e5e72")
      .then((res) => Setw5(res.data.list[38]))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading5(false))
    }
  }, [data.city, data.isLoading7])

  return (
    <div>
      Weather Live
      <Formik
        initialValues={{
          city: "İstanbul"
        }}
        onSubmit={(values) => {
          Setcity(values.city)
        }}
      >
        {({ handleSubmit, handleChange, values }) =>
          <form onSubmit={handleSubmit}>
            <select name="city" onChange={handleChange}>
              <option value="İstanbul">İstanbul</option>
              <option value="Ankara">Ankara</option>
              <option value="İzmir">İzmir</option>
              <option value="Adana">Adana</option>
              <option value="Adıyaman">Adıyaman</option>
              <option value="Afyonkarahisar">Afyonkarahisar</option>
              <option value="Ağrı">Ağrı</option>
              <option value="Aksaray">Aksaray</option>
              <option value="Amasya">Amasya</option>
              <option value="Antalya">Antalya</option>
              <option value="Ardahan">Ardahan</option>
              <option value="Artvin">Artvin</option>
              <option value="Aydın">Aydın</option>
              <option value="Balıkesir">Balıkesir</option>
              <option value="Bartın">Bartın</option>
              <option value="Batman">Batman</option>
              <option value="Bayburt">Bayburt</option>
              <option value="Bilecik">Bilecik</option>
              <option value="Bingöl">Bingöl</option>
              <option value="Bitlis">Bitlis</option>
              <option value="Bolu">Bolu</option>
              <option value="Burdur">Burdur</option>
              <option value="Bursa">Bursa</option>
              <option value="Çanakkale">Çanakkale</option>
              <option value="Çankırı">Çankırı</option>
              <option value="Çorum">Çorum</option>
              <option value="Denizli">Denizli</option>
              <option value="Diyarbakır">Diyarbakır</option>
              <option value="Düzce">Düzce</option>
              <option value="Edirne">Edirne</option>
              <option value="Elazığ">Elazığ</option>
              <option value="Erzincan">Erzincan</option>
              <option value="Erzurum">Erzurum</option>
              <option value="Eskişehir">Eskişehir</option>
              <option value="Gaziantep">Gaziantep</option>
              <option value="Giresun">Giresun</option>
              <option value="Gümüşhane">Gümüşhane</option>
              <option value="Hakkâri">Hakkâri</option>
              <option value="Hatay">Hatay</option>
              <option value="Iğdır">Iğdır</option>
              <option value="Isparta">Isparta</option>
              <option value="Kahramanmaraş">Kahramanmaraş</option>
              <option value="Karabük">Karabük</option>
              <option value="Karaman">Karaman</option>
              <option value="Kars">Kars</option>
              <option value="Kastamonu">Kastamonu</option>
              <option value="Kayseri">Kayseri</option>
              <option value="Kırıkkale">Kırıkkale</option>
              <option value="Kırklareli">Kırklareli</option>
              <option value="Kırşehir">Kırşehir</option>
              <option value="Kilis">Kilis</option>
              <option value="Kocaeli">Kocaeli</option>
              <option value="Konya">Konya</option>
              <option value="Kütahya">Kütahya</option>
              <option value="Malatya">Malatya</option>
              <option value="Manisa">Manisa</option>
              <option value="Mardin">Mardin</option>
              <option value="Mersin">Mersin</option>
              <option value="Muğla">Muğla</option>
              <option value="Muş">Muş</option>
              <option value="Nevşehir">Nevşehir</option>
              <option value="Niğde">Niğde</option>
              <option value="Ordu">Ordu</option>
              <option value="Osmaniye">Osmaniye</option>
              <option value="Rize">Rize</option>
              <option value="Sakarya">Sakarya</option>
              <option value="Samsun">Samsun</option>
              <option value="Siirt">Siirt</option>
              <option value="Sinop">Sinop</option>
              <option value="Sivas">Sivas</option>
              <option value="Şırnak">Şırnak</option>
              <option value="Tekirdağ">Tekirdağ</option>
              <option value="Tokat">Tokat</option>
              <option value="Trabzon">Trabzon</option>
              <option value="Tunceli">Tunceli</option>
              <option value="Şanlıurfa">Şanlıurfa</option>
              <option value="Uşak">Uşak</option>
              <option value="Van">Van</option>
              <option value="Yalova">Yalova</option>
              <option value="Yozgat">Yozgat</option>
              <option value="Zonguldak">Zonguldak</option>
            </select>
            <button type='submit'>submit</button>
          </form>}
      </Formik>
    </div>
  )
}

export default ApiProvider