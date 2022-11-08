import React, {  useState } from 'react';
import { useEffect } from 'react';
import FiveDays from './FiveDays'
import Forecast from './Forecast';


export default function HomePage(props) {

  // const API_KEY = 'AMn2HUVjVbYVX21t7LFEXOQMHW5cpMlS'
  const API_KEY = '0AeBLQ3aXbnf46HVGEcDPRk2OvJ8aGgW'
  // const API_KEY = 'WebHzrX0S4ZGR1xqMmgg9s1cMgcjL6CE'

  const condotion = {
    WeatherText: "Mostly sunny",
    Temperature: {
      Metric: {
        Value: 23.5,
      }
    }
  }

  const cityAutocomplete = {
    Key: "215854",
    LocalizedName: "Tel Aviv",
  }

  const [city, setCity] = useState({})
  const [cityKey, setCityKey] = useState('')
  const [currentCondtion, setCurrentCondtion] = useState({})

  const addToFavoriteBtn = () => {
    props.saveFavoriteCity({cityKey: cityKey, cityName: city.LocalizedName})
  }

  const removeFromFavoriteBtn = () => {
    props.removeFavoriteCity(cityKey)
  }


  const fetchCityCondition = (cityName) => {
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${cityName}`)
    .then((res)=>res.json())
    .then((data)=>{
      setCityKey(data[0].Key)
      setCity(data[0])
      // setCities(data) - continue with autocomplete
    })

    fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API_KEY}`)
    .then((res)=>res.json())
    .then((data)=>setCurrentCondtion(data[0]))
  }


  useEffect(()=>{
    fetchCityCondition("tel aviv")
  }, [])


  const getCityAutocomplete = (e) => {
    // add error handloing
    let searchInput = e.target.value
    if(isCityNameValid(searchInput)) {
      fetchCityCondition(e.target.value)
    } else {
      alert('English letters only!')
    }
  }

  const isCityNameValid = (city) => {
    for(let i=0; i<city.length; i++) {
      let c = city.charAt(i).toLowerCase()
      if(!(c >= 'a' && c <= 'z')) {
        return false
      }
    }
    return true
  }

  const isInFav = () => {
    let inFav = false; 
    if(cityKey) {
      props.favoriteLocal.map(fav => {
        if(fav.favorite.cityKey == cityKey) {
          inFav = true
        }
      })
    }
    if(inFav) {
      return <button id='redBG' className='largeBtn' onClick={removeFromFavoriteBtn}>Remove to favorite</button>
    } else {
      return <button className='largeBtn' onClick={addToFavoriteBtn}>Add to favorite</button>
    }
  }


  return (
    <div >
      <input type={'text'} onChange={getCityAutocomplete} placeholder={"Search"} />
      {isInFav()}<br />
      <Forecast title={city.LocalizedName} tempaure={currentCondtion.Temperature.Metric.Value}/>
      <FiveDays cityKey={cityKey} />
    </div>
  )
}
