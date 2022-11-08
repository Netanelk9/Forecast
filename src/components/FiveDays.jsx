import React, {  useEffect, useState } from 'react';
import Forecast from './Forecast';

export default function FiveDays(props) {

  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const API_KEY = 'AMn2HUVjVbYVX21t7LFEXOQMHW5cpMlS'
  // const API_KEY = 'WebHzrX0S4ZGR1xqMmgg9s1cMgcjL6CE'
  // const API_KEY = 'mf7ATNQVNyhudAntt7XxOxAyaRcVAS3K'

  const [fivedays, setFivedays] = useState([])

  // useEffect(()=>{
  //   fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${props.cityKey}?apikey=${API_KEY}&metric=true`)
  //   .then((res)=>res.json())
  //   .then((data)=>setFivedays(data.DailyForecasts))
  //   .catch(e=>console.log(e))
  // }, [])

  return (
    <div>
      <h3>five days forecasts</h3>
      {/* <div className='flexboxContainer'>
        {fivedays.map(f => <Forecast title={weekday[new Date(f.Date).getDay()]} tempaure={f.Temperature.Maximum.Value}/>)}
      </div> */}
    </div>
  )
}
