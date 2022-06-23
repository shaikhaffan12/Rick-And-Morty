import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const filterFunc = createAsyncThunk ('filter/filterFunc', async(url) => {
    const concUrl = `https://rickandmortyapi.com/api/character/?${url}`
    const response = await axios .get(concUrl) .catch ((error) => {
        console.log (error)
        
    })
    console.log('filter character',response.data)
    return response.data
})
