import React, { useState } from 'react';
import { Avatar, Box, Typography, LinearProgress } from '@mui/material';
import { Link } from 'react-router-dom';

import './movie-row.css';
import { useMediaQuery } from '@mui/material';

const MovieRow = ({ title, movies, imageField, movieSx, progress, children }) => {
    const [page, setPage] = useState(1);
    
    const isMobile = useMediaQuery('(max-width:899px)');

    const ENTRIES_ON_ONE_PAGE = isMobile ? 2 : 5;

    const onPrevArrowClick = () => {
        if (page > 1){
            setPage(page-1);
        } else {
            setPage(page);
        }
    }

    const onNextArrowClick = () => {
        if (page < Math.ceil(movies.length/ENTRIES_ON_ONE_PAGE)){
            setPage(page+1);
        } else {
            setPage(Math.ceil(movies.length/ENTRIES_ON_ONE_PAGE));
        }
    }

    return (
        <Box sx={{ marginBottom: '3rem' }}>
            <Typography sx={{ marginLeft: '5vw', marginBottom: '1.5rem' }} variant="h4">{title}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', maxWidth: '100%', overflowX: 'hidden' }}>
                <Box className="arrow-container" sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    width: '5vw', 
                    cursor: page===1 ? 'auto' : 'pointer' 
                }} onClick={onPrevArrowClick}>
                    { page!==1 ? <Avatar sx={{ cursor: 'pointer' }} alt="Prev" src="/images/icons/prev-arrow.png" /> : null }
                </Box>
                <Box className="movie-row-container" sx={{ display: 'flex', flexDirection: 'row', gap: '0.2rem', width: '90vw', overflowX: 'visible' }}>
                    { movies?.filter((movie,index) => index>=(page-1)*ENTRIES_ON_ONE_PAGE && index<page*ENTRIES_ON_ONE_PAGE).map((movie,index) => {
                        if (children){
                            return React.cloneElement(children, { key:movie?.id , movie: movie, index: (page-1)*ENTRIES_ON_ONE_PAGE + index + 1, ENTRIES_ON_ONE_PAGE: ENTRIES_ON_ONE_PAGE })
                        }
                        return <Box key = {movie?.id} sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', width: 100/(ENTRIES_ON_ONE_PAGE) + "%" }}>
                                <Typography sx={{ position: 'absolute', top: '0.5rem', left: '0.5rem' }}>{movie?.title}</Typography>
                                <Link to={`/movie/${movie?.id}`}>
                                <Avatar 
                                    className = "movie-card"
                                    variant = "square" 
                                    alt = {movie?.title}
                                    src = {"https://image.tmdb.org/t/p/original" + movie[imageField ? imageField : "backdrop_path"]} 
                                    sx = { movieSx ? movieSx : { width: '100%', height: 200 }} />
                                </Link>
                                { progress ? <LinearProgress variant="determinate" value={Math.random()*100} sx={{ margin: '0.5rem', width: '80%', color: "#b9090b" }} /> : null }
                            </Box>
                    }) }
                </Box>
                <Box className="arrow-container" sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    width: '5vw', 
                    cursor: page===Math.ceil(movies.length/ENTRIES_ON_ONE_PAGE) ? 'auto' : 'pointer'
                }} onClick={onNextArrowClick}>
                    { page!==Math.ceil(movies.length/ENTRIES_ON_ONE_PAGE) ? <Avatar sx={{ cursor: 'pointer' }} alt="Next" src="/images/icons/next-arrow.png" /> : null }
                </Box>
            </Box>
        </Box>
    )
}

export default MovieRow;