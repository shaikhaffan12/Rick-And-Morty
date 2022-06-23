import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacter, favCharacter } from '../components/redux_slices/Character';
import 'bootstrap/dist/css/bootstrap.css';
import './Card.css';
import { Grid } from '@mui/material';
import PageNumbers from './Paginations';
import { Filter } from './Filter';





export default function Cards() {


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCharacter())
    }, [])

    const selector = useSelector(state => state.character.character.results)

    const loaded = useSelector(state => state.character.loaded)

    if (loaded) {
        

        var multiplCards = selector.map(elem => {

            return (
                
                <Grid item >
                    <Card sx={{ maxWidth: 345 }} >
                        
                        <CardMedia
                            component="img"
                            height="194"
                            image={elem.image}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                               Name: {elem.name}
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                               Status: {elem.status}
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                               Species: {elem.species}
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                               Gender: {elem.gender}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites"  onClick={() => {
                                dispatch(favCharacter (elem.url))
                                
                            }}>
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            
                        </CardActions>
                        
                            
                    </Card>
                    </Grid>
            )
        })
    }



    return (
        <div classNameName='div_cls '>
            <h6 id='fillterHeader'>Filter Your Favourite Character Here</h6>
            <Filter />
            <Grid container spacing={2} justifyContent= "center" alignItems="center" sx = {{marginTop : '15px'}} style = {{'marginTop' : '15px'}}>

            {multiplCards}
            </Grid>
            <div className='pagination'>
                <PageNumbers /> 
            </div>
        </div>
    );
}
