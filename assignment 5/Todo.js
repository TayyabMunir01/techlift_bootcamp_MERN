import React, { useEffect } from 'react'
// import List from './Lists'
import { useState,useRef } from 'react'
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
// import TextField from '@mui/material/TextField';


let listStyle = {
    display: 'flex',
    maxWidth: '600px',
    justifyContent: 'space-around',
    textAlign: 'left'
}

// localStorage.setItem("itess","[]")

export default function Todo(){
   

    const nameInput = useRef()
    const addressInput = useRef()
    const cityInput = useRef()
    const addButton = useRef()
    const searchButton = useRef()
    
    
    let [items,setItems] = useState([])   
    let [searchItems, setSearchItems] = useState([])
    
    // localStorage.setItem("itess",JSON.stringify(items))
    // setItems([...JSON.parse(localStorage.getItem("itess"))])

    // useEffect(()=>{
    //     if(localStorage.getItem("itess")!=null){
    //         // localStorage.setItem("itess","[]")
    //         setItems([...JSON.parse(localStorage.getItem("itess"))])
    //         console.log('inise efefct')
    //     }
    // },[])


    function handleAdd(e){

            // console.log(name,address,city)
          
                if(items.length===0){
                    setItems([{"id":1,"name":nameInput.current.value,"address":addressInput.current.value,"city":cityInput.current.value}])
                    
                }
                else{
                    setItems([...items,{"id":items[items.length-1].id+1,"name":nameInput.current.value,"address":addressInput.current.value,"city":cityInput.current.value}])
                
                }        
                nameInput.current.value=''
                addressInput.current.value=''
                cityInput.current.value='select'
                // e.target.innerText = 'Add'
                
         
            // setName('')
            // setAddress('')
            // setCity('')
        }

    function handleEdit(e,item){
        console.log(e.target.innerText)
        if(e.target.innerText=='EDIT'){
            nameInput.current.value = item.name
            addressInput.current.value = item.address
            cityInput.current.value = item.city
            e.target.innerText = 'UPDATE'
            
            console.log(e,item,e.target)
            
            nameInput.current.focus()
        }
        
        else if(e.target.innerText=='UPDATE'){
            let newItem = {"id":item.id, "name":nameInput.current.value, "address":addressInput.current.value, "city":cityInput.current.value}

            console.log(newItem)
            let itemsList = items
            // console.log(itemsList)
            itemsList[item.id-1] = newItem
            // setItemsList(itemsList)
            setItems([...itemsList])
            
            nameInput.current.value = ''
            addressInput.current.value = ''
            cityInput.current.value = 'select'
            
            e.target.innerText = 'EDIT'
        }
    }

    function handleDelete(e,item){
        console.log(e.target,item.id)
        setItems([...items.filter(x=>(x.id!=item.id))])
        console.dir(document.getElementsByClassName('list-item')[0])
        // document.getElementsByClassName('list-item')[0].style.
    }

    function handleSearch(e){
        console.log(e.target)
        console.log(searchButton.current.value)
        let x = items.filter(x=>x.name.includes(searchButton.current.value))
        // setSearchItems([...x])
        // console.log(searchItems,'seach itesm')
        console.log(x)
        setSearchItems(x)
    }

    function clearAll(e){
        setItems([])
        // localStorage.removeItem("itess")
    }
    // console.log(items.length,items)
    // console.log(searchItems,'tjhis is serach itemss')

    return (
        <>
        <div className='container'>
            <div className='form'>
                <div>
                    <input type='text' placeholder='Search by Name' name='search' ref={searchButton}/>
                    <Button color='info' variant='contained' onClick={handleSearch} startIcon={<SearchIcon/>}>Search</Button>
                </div>
                <div>
                    <input type='text' placeholder='Name' name='name'  ref={nameInput}/> <br></br>
                    <input type='text' placeholder='Address' name='address'  ref={addressInput}/> <br></br>
                    <select name='city' ref={cityInput}>
                        <option value='select' defaultValue={'DEFAULT'}>Select City ...</option>
                        <option value='Islamabad'>Islamabad</option>
                        <option value='Lahore'>Lahore</option>
                        <option value='Karachi'>Karachi</option>
                    </select>
                    <Button color='success' variant='contained' onClick={handleAdd} ref={addButton} startIcon={<AddCircleIcon/>}>Add</Button>
                </div>
                <div>
                    <Button onClick={clearAll}>Clear All</Button>
                </div>
            </div>

            
                <div className='list'>
                    <div >
                        <h2>List</h2>
                        {items.map(item=> <div style={listStyle} className='list-item'>
                                <div className='item-values'>
                                    <div>{item.name}</div>
                                    <div>{item.address}</div>
                                    <div>{item.city}</div>
                                </div>
                                <div className='buttons'>
                                    <Button color='success' variant='contained' style={{margin:'0 5px'}} onClick={(e)=>{handleEdit(e,item)}} startIcon={<EditIcon/>}>Edit</Button>
                                    <Button color="error" variant='contained' onClick={(e)=>{handleDelete(e,item)}} startIcon={<DeleteIcon/>}>Delete</Button>
                                </div>
                        </div>)}
                    </div>
                </div>        

                
                <div className='searchResult'>
                        <h2>Search Results</h2>
                        {searchItems.map(item=> <div style={listStyle}>
                                    <div>{item.id}</div>
                                    <div>{item.name}</div>
                                    <div>{item.address}</div>
                                    <div>{item.city}</div>
                            </div>)}
                </div>
        </div>
        
        </>
    )
}



