import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { filterFunc } from '../components/redux_slices/filterFunc';

export var pageCount;
export var characterCount;

export default function PageNumbers() {
    const dispatch = useDispatch()
    const pageInfoSelector = useSelector(state => state.character.character.info)
    const loaded = useSelector(state=>state.character.loaded)

    if(loaded){
        pageCount = pageInfoSelector.pages
        characterCount = pageInfoSelector.count
    }

  return (
    <>
    <Stack spacing={2}>
      <Pagination count={pageCount} variant="outlined" color="primary"  onChange={(e,page)=>{
        dispatch(filterFunc(`page=${page}`))
        }}/>
    </Stack>
    </>
  );
}