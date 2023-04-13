import './App.css';
import Dropdown from './components/Dropdown'
import {useState} from 'react'


let location = {
  isl: {lat: 33.72, long:73.04},
  lhr: {lat: 31.56, long:74.35},
  ny: {lat: 40.71, long:-74.01},
  al: {lat: 45.33, long:-100.12},
}





function App() {

  let [country,setCountry] = useState('')
  let [city,setCity] = useState('')
  let [weatherData,setWeatherData] = useState({hourly:{temperature_2m:[null],time:[null],visibility:[null],winddirection_10m:[null],windspeed_10m:[null],windgusts_10m:[null]}})
  
  function handleChange(e){
    let a = e.target.value
    setCountry(a)
  }



  function handleCity(e){
    let a = e.target.value
    setCity(a)
    if(a=='Islamabad') apiCall(location.isl)
    else if(a=='Lahore') apiCall(location.lhr)
    else if(a=='Newyork') apiCall(location.ny)
    else if(a=='Alaska') apiCall(location.al)

  }

  function apiCall(loc={lat:0,long:0}){
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${loc.lat}&longitude=${loc.long}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,weathercode,pressure_msl,surface_pressure,visibility,evapotranspiration,vapor_pressure_deficit,windspeed_10m,winddirection_10m,windgusts_10m,temperature_80m,temperature_120m,temperature_180m`).then( (res)=>{return res.json()} ).then((data)=>{console.log(data);setWeatherData(data)}).catch((e)=>{console.log(e)})

  }

  return(
    
    <>

    <div className='container'>
      <Dropdown countries={{pak:"Pakistan",usa:"America"}} onchange={handleChange}/>
      {
        country ==  'Pakistan' ?
        <Dropdown countries={{pak:"Islamabad",usa:"Lahore"}} onchange={handleCity}/> : (country ==  'America' ?   <Dropdown countries={{pak:"Newyork",usa:"Alaska"}} onchange={handleCity}/> : '')
      }    
    </div>

      <div className='city'>
          {city!='select'? city : 'Select City'}
      </div>

 
          <div className='results'> 
              <div > <div>Temperature:</div> <div>{weatherData.hourly.temperature_2m[0]}</div> </div>
              <div > <div>time:</div>  <div>{weatherData.hourly.time[0]}</div>   </div>
              <div > <div>visibility:</div>   <div> {weatherData.hourly.visibility[0]}</div>  </div>
              <div > <div>wind Direction:</div>   <div>{weatherData.hourly.winddirection_10m[0]}</div>   </div>
              <div > <div> wind Speed:</div>  <div> {weatherData.hourly.windspeed_10m[0]}</div>  </div>
              <div > <div>wind Gusts:</div>   <div>{weatherData.hourly.windgusts_10m[0]}</div>   </div>
          </div>
    
      


    </>

    
  );
}


export default App;
