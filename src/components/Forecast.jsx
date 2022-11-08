import React from 'react'

export default function Forecast(props) {

  const createBtn = () => {
    if(props.cityKey) {
      return <button onClick={removeFavBtn}>X</button>
    }
  }

  const removeFavBtn = () => {
    props.removeFavoriteCity(props.cityKey) 
  }

  return (
    <div className='flexItem'>
        <div>{props.title}</div>
        <div>{props.tempaure}C</div>
        <div>{props.cityKey}</div>
        {createBtn()}
    </div>
  )
}
