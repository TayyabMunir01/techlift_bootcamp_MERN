import React from 'react'
import Dropdown from './Dropdown'
import { useState } from 'react'
import Results from './Results'
  
export default function (){
      let [country,setCountry] = useState('')
      let [city,setCity] = useState('')

    
    function handleChange(e){
        let a = e.target.value
        setCountry(a)
    }
    
    function handleCity(e){
        let a = e.target.value
        setCity(a)
        if(a=='Islamabad') {setCity('Islamabad');}
        else if(a=='Lahore') {setCity('Lahore'); }
        else if(a=='Newyork') {setCity('Newyork'); }
        else if(a=='Alaska') {setCity('Alaska'); }
        console.log('in handle city')
    }

    console.log('in weather query client')  


    return (

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


            <Results city={city}>

            </Results>

        </>

    )

}
