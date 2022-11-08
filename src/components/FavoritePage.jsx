import React, {  useState } from 'react';
import { useEffect } from 'react';
import Forecast from './Forecast';


export default function FavoritePage(props) {

  // const API_KEY = 'AMn2HUVjVbYVX21t7LFEXOQMHW5cpMlS'
  const API_KEY = '0AeBLQ3aXbnf46HVGEcDPRk2OvJ8aGgW'
  // const API_KEY = 'WebHzrX0S4ZGR1xqMmgg9s1cMgcjL6CE'

  const [currentConditions, setCurrentConditions] = useState([])

  useEffect(()=>{
    let arrConditions = []
    props.favoriteLocal.map(fav => {
      fetch(`http://dataservice.accuweather.com/currentconditions/v1/${fav.cityKey}?apikey=${API_KEY}`)
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data[0]);
        arrConditions.push({favorite: fav, condition: data[0]})
      })
    })
    setCurrentConditions(arrConditions)
  }, [])

  return (
    <div>
      <h1>FAVV</h1>
      <div className='flexboxContainer'>
        {props.favoriteLocal.map((c)=>{
          return <Forecast title={c.favorite.cityName} tempaure={c.condition.Temperature.Metric.Value} cityKey={c.favorite.cityKey} removeFavoriteCity={props.removeFavoriteCity} />
        })}
      </div>
    </div>
  )
}
