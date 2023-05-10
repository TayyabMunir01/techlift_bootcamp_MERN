import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Spinner from "./Spinner";
import Button from '@mui/material/Button';

let location = {
    isl: {lat: 33.72, long:73.04},
    lhr: {lat: 31.56, long:74.35},
    ny: {lat: 40.71, long:-74.01},
    al: {lat: 45.33, long:-100.12},
  }

function Results({city}){
    let [val,setVal] = useState(0)


     function apiCall1(loc={lat:0,long:0}){
        let data =  axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${loc.lat}&longitude=${loc.long}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,weathercode,pressure_msl,surface_pressure,visibility,evapotranspiration,vapor_pressure_deficit,windspeed_10m,winddirection_10m,windgusts_10m,temperature_80m,temperature_120m,temperature_180m`)    
        console.log(data)
        return data
    }

    console.log('in results',city)

    let {isLoading, data,refetch,isFetching} = useQuery('weather',()=>{
        console.log('in loading',isLoading)
        if(city=='Islamabad')  return apiCall1(location.isl)
        if(city=='Lahore')  return apiCall1(location.lhr)
        if(city=='Newyork')  return apiCall1(location.ny)
        if(city=='Alaska')  return apiCall1(location.al) 
        console.log('in useQuery')
    },{enabled:false})
    if (isFetching) {
        return (
        <>
            <Spinner></Spinner>
        </>
    )}
        
    return (
       <>
        <div className='results'> 
        <div > <div>Temperature:</div> <div>{data?.data.hourly.temperature_2m[0]}</div> </div>
        <div > <div>time:</div>  <div>{data?.data.hourly.time[0]}</div>   </div>
        <div > <div>visibility:</div>   <div> {data?.data.hourly.visibility[0]}</div>  </div>
        <div > <div>wind Direction:</div>   <div>{data?.data.hourly.winddirection_10m[0]}</div>   </div>
        <div > <div> wind Speed:</div>  <div> {data?.data.hourly.windspeed_10m[0]}</div>  </div>
        <div > <div>wind Gusts:</div>   <div>{data?.data.hourly.windgusts_10m[0]}</div>   </div>
        </div>

       <div>
            {/* <button onClick={()=>{refetch(); setVal(val+1);}}>
                Get Data
            </button> */}
            <Button variant="outlined" onClick={()=>{refetch(); setVal(val+1);}}>Get Data</Button>
       </div>

       </> 

    )
}

export default Results