import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { filterFunc } from "./filterFunc";

const initialState = {
    loading : false,
    loaded : false,
    character : [],
    favcharcter : [],
    numberOfFav:0,
    error : ''
}

export const favCharacter = createAsyncThunk ('fav/favCharacter', async (characterAPI) =>{
    const response = await axios.get(`${characterAPI}`).catch((err)=>{
        console.log("Favourite character error : ",err)
    })
    console.log('data fav', response.data)
    return response.data
})

export const fetchCharacter = createAsyncThunk ('character/fetchCharacter',async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/character').catch(error => {
        console.log(error)
    })
    console.log(response.data)
    return response.data
})

const characterSlice = createSlice({
    name : 'character',
    initialState,
    extraReducers : builder => {
        builder.addCase(fetchCharacter.pending, state => {
            state.loading = true
        })

        builder.addCase(fetchCharacter.fulfilled, (state,action) => {
            // state.loading = false
            state.loaded = true
            state.character = action.payload
            state.error = ''
        })

        builder.addCase(fetchCharacter.rejected, (state,action) => {
            state.loading = false
            state.character = []
            state.error = action.error.message
        })

        builder.addCase(favCharacter.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(favCharacter.fulfilled,(state,action)=>{
            if (state.favcharcter.find(elem => elem.id === action.payload.id)){
                const index = state.favcharcter.findIndex(elem => elem.id === action.payload.id)
                state.favcharcter.splice(index, 1)
                state.numberOfFav -= 1
                return
            }
            
            state.favcharcter.push(action.payload)
            state.loaded = true
            state.numberOfFav += 1
        })
        builder.addCase(favCharacter.rejected,(state)=>{
            state.error = true
        })
        builder.addCase(filterFunc.pending, (state) => {
            state.loading = true
        })
        builder.addCase(filterFunc.fulfilled, (state,action) =>{
            state.loaded = true
            state.character = action.payload
            state.error = ''
        })

        builder.addCase(filterFunc.rejected, (state,action) => {
            state.loaded = false
            state.character = []
            state.error = action.error.message
        })
    }
})

export default characterSlice.reducer;
