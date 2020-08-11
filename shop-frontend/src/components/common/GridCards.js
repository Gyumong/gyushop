import React from 'react';
import Grid from '@material-ui/core/Grid';
function GridCards(props){
    if(props.landingPage){
        return(
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <div style={{position:'relative'}}>
                    <a href={`/movie/${props.movieId}`}>
                        <img style={{width:'100%',height:'320px'}} src={props.image} alt={props.movieName}/>
                    </a>
                </div>
           </Grid>
            
        );
        
    }else{
        return(
            <Grid item lg={3} md={4} sm={6} xs={12}>
            <div style={{position:'relative'}}>
                    <img style={{width:'100%',height:'320px'}} src={props.image} alt={props.charactorName}/>
            </div>
       </Grid>
        );
    }
};

export default GridCards;
