import React from 'react'
import { useState } from 'react';
// import Input from '@mui/material/Input';
import 'bootstrap/dist/css/bootstrap.css';
import './SearchItem.css';
import { Button, Paper } from '@mui/material';

// import InputBase from '@mui/material/InputBase';
// or
import { InputBase } from '@mui/material';
// import Button from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';

export var favfilter = '' ;

export const SearchItem = () => {
    
    const [name, setName]= useState('');
    
    const searchItems = (searchValue) => {
        setName(searchValue)
    }
    favfilter = name
    console.log(name)
  return (
    <div className='text-center mt-5'>
    <Paper
    component="form"
    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    style={{'margin':'3px'}}
  />
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      value={name}
      onChange={(e)=>setName(e.target.value)}
      placeholder="Search Character Name"
      inputProps={{ 'aria-label': 'search google maps' }}
      
    /> 
   {/* <Button variant="contained">Contained</Button> */}
     
    
    </div>
  )
}
