import './App.css';
import React, {  useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import FavoritePage from './components/FavoritePage';
import Header from './components/Header';


function App() {

  const favoriteLocalTest = [
    // { cityKey: "215854", cityName: "Tel Aviv" },
    { cityKey: "328328", cityName: "London" },
    { cityKey: "226396", cityName: "Tokyo" }
  ]

  const favoriteLocalConTest = [
    {
      favorite: { 
        cityKey: "215854",
        cityName: "Tel Aviv"
      },
      condition: { 
        Temperature: { 
          Metric: {
            Value: 20.3
          } 
        }
      }
    },
    {
      favorite: { 
        cityKey: "328328",
        cityName: "London"
      },
      condition: { 
        Temperature: { 
          Metric: {
            Value: 18.8
          } 
        }
      }
    },
    {
      favorite: { 
        cityKey: "226396",
        cityName: "Tokyo"
      },
      condition: { 
        Temperature: { 
          Metric: {
            Value: 30.1
          } 
        }
      }
    }
  ]
    

  const [favoriteLocal, setFavoriteLocal] = useState([])

  const saveFavoriteCity = (fav) => {
    setFavoriteLocal([...favoriteLocal, fav])
  }

  const removeFavoriteCity = (key) => {
    let filltered = favoriteLocal.filter(fav => fav.favorite.cityKey != key)
    setFavoriteLocal([...filltered])
  }

// autocomplete
// http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=WebHzrX0S4ZGR1xqMmgg9s1cMgcjL6CE&q=Tel%20Aviv

// currentconditions
// "http://dataservice.accuweather.com/currentconditions/v1/215854?apikey=WebHzrX0S4ZGR1xqMmgg9s1cMgcjL6CE"

// 5 Days
// "http://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=WebHzrX0S4ZGR1xqMmgg9s1cMgcjL6CE"



  return (
    <div className="App">
      <Router>
        <Header/>
        <hr/>
         <Routes>
            <Route path='/' element ={<HomePage favoriteLocal={favoriteLocal} saveFavoriteCity={saveFavoriteCity} removeFavoriteCity={removeFavoriteCity}/>}/>
            <Route path='/favorite' element={<FavoritePage favoriteLocal={favoriteLocal} removeFavoriteCity={removeFavoriteCity}/>} />
         </Routes>
      </Router>
     
    </div>
  );
}

export default App;
