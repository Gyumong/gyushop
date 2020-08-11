import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {API_URL,API_KEY,IMAGE_URL} from '../Config';
import styled from 'styled-components';
import MainImage from '../Section/MainImage';
import MovieInfo from './MovieInfo';
import GridCards from '../common/GridCards';
import Grid from '@material-ui/core/Grid';
const BodyBlock= styled.div`
    width:50%;
    margin:1rem auto;
`;
const GridBlock = styled.div`
    width:85%;
    margin:1rem auto;
`;
const ActorsGridBlock= styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    margin:2rem;
`;
function MovieDetail(props) {
    const movieId =props.match.params.movieId;
    const [Movie,setMovie] = useState([]);
    const [Cast,setCast] = useState([]);
    const [ActorToggle,setActorToggle]= useState(false);

    useEffect(() => {
        const fetchDetail= async()=>{
            const URL_Crew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
            const URL_Info= `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
            const response = await axios.get(URL_Info);
            setMovie(response.data);
            console.log(response.data);
            const castresponse = await axios.get(URL_Crew);
            setCast(castresponse.data.cast);
            console.log(castresponse.data.cast);
        }
        fetchDetail();
    }, []);

    const toggleActor=()=>{
        setActorToggle(!ActorToggle);
    }
    return (
        <>
            <MainImage
                    image={`${IMAGE_URL}w1280${Movie.backdrop_path}`}
                    title={Movie.original_title}
                    text={Movie.overview}
            />
        <BodyBlock>
            {/* MovieInfo */}
            <MovieInfo 
                movie={Movie}
            />

        <br/>

        </BodyBlock>
        <GridBlock>

            {/*Actor Grid */}
            <div style={{display:'flex', justifyContent:'center',marginBottom:'2rem'}}>
                <button onClick={toggleActor}>Toggle Actor View</button>
                </div>
            <ActorsGridBlock>
            {ActorToggle && 
            
            <Grid container spacing={3}>
            
            {Cast && Cast.map((cast,index)=> (
                <React.Fragment key={index}>
              <GridCards
                image={cast.profile_path ?
                    `${IMAGE_URL}w500${cast.profile_path}`:null}
                    
                    charactorName={cast.name}
                    />  
              </React.Fragment>
            ))}
            
          </Grid>
            }
            </ActorsGridBlock>
        </GridBlock>
        </>
    )
}

export default MovieDetail;
