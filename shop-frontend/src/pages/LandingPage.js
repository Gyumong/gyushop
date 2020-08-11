import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {API_URL,API_KEY,IMAGE_URL} from '../components/Config';
import MainImage from '../components/Section/MainImage';
import styled from 'styled-components';
import GridCards from '../components/common/GridCards';
import Grid from '@material-ui/core/Grid';

const MainImageBlock=styled.div`
  width:100%; 
  margin:0;
`;


const LadingInfo=styled.div`
    width:85%;
    margin:1rem auto;
    h2{
        margin-bottom:1rem;
        text-align:center;
    }
    hr{
        margin-bottom:1rem;
    }
`;
const LandingPage = ()=>{

    const [movies, setMovies] = useState([]);
    const [MainMovieImage,setMainMovieImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentPage,setCurrentPage]= useState(0);

    useEffect(() => {
      const URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      fetchMovie(URL);
      }, []);
      
    const fetchMovie = async (URL) => {
      try {
        setError(null);
        setMovies(null);
        setLoading(true);
        const response = await axios.get(URL);
        setMovies([...movies, ...response.data.results]);
        setMainMovieImage(response.data.results[0]);
        setCurrentPage(response.data.page)
        // console.log(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    
      if (loading) return <div>로딩중..</div>;
      if (error) return <div>에러가 발생했습니다</div>;

      const loadmore=()=>{
        const URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage+1}`
          fetchMovie(URL);
      }
      
    return(
    <>
        <MainImageBlock>
        {MainMovieImage &&
        <MainImage 
        image={`${IMAGE_URL}w1280${MainMovieImage.backdrop_path}`}
        title={MainMovieImage.original_title}
        text={MainMovieImage.overview}
        />
      }
      
        <LadingInfo>
            <h2>Movies by latest</h2>
            <hr/>
            {/* Grid Cards */}

            <Grid container spacing={3}>
            
              {movies && movies.map((movie,index)=> (
                <React.Fragment key={index}>
                <GridCards
                  landingPage
                  image={movie.poster_path ?
                    `${IMAGE_URL}w500${movie.poster_path}`:null}
                    movieId={movie.id}
                    movieName={movie.original_title}
                />  
                </React.Fragment>
              ))}
              
            </Grid>
        </LadingInfo>

        <div style={{display:'flex', justifyContent:'center',marginBottom:'2rem'}}>
            <button onClick={loadmore}>Load more</button>
        </div>
       </MainImageBlock>
    </>
    );
};

export default LandingPage;