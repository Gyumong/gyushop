import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

function MovieInfo(props) {
    const {movie}= props;
    return (
        <div>
        <List >
      <ListItem >
        <ListItemText primary="제목" />
        {movie.title}
      </ListItem>
        <Divider/>
        <ListItem >
        <ListItemText primary="관객수" />
        {movie.popularity}
      </ListItem>
        <Divider/>
      <ListItem >
        <ListItemText primary="개봉일" />
           
            {movie.release_date}
      </ListItem>
      <Divider/>
      <ListItem >
        <ListItemText primary="평점" />
        {movie.vote_average}
      </ListItem>
      <Divider/>
      <ListItem>
        <ListItemText primary="Runtime" />
        {movie.runtime}분
      </ListItem>
    </List>
        </div>
    )
}

export default MovieInfo
