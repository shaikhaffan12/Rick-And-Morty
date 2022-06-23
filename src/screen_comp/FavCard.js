import React from 'react'
import { useSelector } from 'react-redux'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Grid } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.css';
import './FavCard.css'



export const FavCard = () => {
    const favcharcter = useSelector(state => state.character.favcharcter)
    const No_of_favcharacter = useSelector(state=>state.character.numberOfFav)
     
    console.log(favcharcter)
    // const dispatch = useDispatch()

    if(No_of_favcharacter > 0){
        var favCharCards = favcharcter.map(elem => {
            return(
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
                                // dispatch(favcharacter (elem.url))
                                console.log('extracted', elem.url)
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
    <div classNameName='div_cls mt-5'>
        <h5 className='text-center heading'>My Favourite Cards</h5>
            
            <Grid container spacing={2} justifyContent= "center" alignItems="center" sx = {{marginTop : '20px'}} >

            {favCharCards}
            </Grid>
        </div>
  )
}
