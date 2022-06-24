import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const FavFilter = () => {
  return (
    <div className='cards_container'>
        
    <div id='filters'>
    <Box style={styleBox}>
    <FormControl style={styleBoxInput} fullWidth>
        <InputLabel id="demo-simple-select-label">Species</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Status"
          value={species}
          onChange={e=>{
            setSpecies(e.target.value)
            
          }}
        >
          <MenuItem value={'species=human'}>Human</MenuItem>
          {/* <MenuItem value={'species=animal'}>Animal</MenuItem> */}
          <MenuItem value={'species=alien'}>Alien</MenuItem>
          {/* <MenuItem value={'species=humanoid'}>Humanoid</MenuItem> */}
          <MenuItem value={'species=unknown'}>Unknown</MenuItem>
        </Select>
      </FormControl>
      <FormControl style={styleBoxInput} fullWidth>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Status"
          value={gender}
          onChange={e=>{
            setGender(e.target.value)
            
          }}
        >
          <MenuItem value={'gender=male'}>Male</MenuItem>
          <MenuItem value={'gender=female'}>Female</MenuItem>
          <MenuItem value={'gender=unknown'}>Unknown</MenuItem>
        </Select>
      </FormControl>
      <FormControl style={styleBoxInput} fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Status"
          value={status}
          onChange={e=>{
            setStatus(e.target.value)
            
          }}
        >
          <MenuItem value={'status=alive'}>Alive</MenuItem>
          <MenuItem value={'status=dead'}>Dead</MenuItem>
          <MenuItem value={'status=unknown'}>Unknown</MenuItem>
        </Select>
      </FormControl>
      {/* <SearchButton/> */}
    </Box>
    </div>
    </div>
  )
}
