import React, { useState, useEffect } from 'react';
import { Avatar, Box, useMediaQuery } from '@mui/material';

import HomeMovieHeroCard from './HomeMovieHeroCard';

import { GetGenreList, GetTopRatedMovies } from '../apis/tmdb';


const HomeMovieHero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const isMobile = useMediaQuery('(max-width:768px)');
    
    const [movies, , fetchMovies] = GetTopRatedMovies();
    const [genres, , fetchGenres] = GetGenreList();

    const onPrevArrowClick = () => {
        if (currentIndex > 0){
            setCurrentIndex(currentIndex-1);
        } else {
            setCurrentIndex(movies.length-1);
        }
    }

    const onNextArrowClick = () => {
        if (currentIndex < movies.length-1){
            setCurrentIndex(currentIndex+1);
        } else {
            setCurrentIndex(0);
        }
    }

    useEffect(() => {
        fetchMovies();
        fetchGenres();
    }, [fetchMovies, fetchGenres])

    const getPrevMovie = (currentIndex) => {
        const prevIndex = currentIndex > 0 ? currentIndex-1 : movies.length-1;
        return movies[prevIndex];
    }

    if (!isMobile){
        return (
            <>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '2rem 0', gap: '2vw' }}>
                    <Box className="arrow-container" sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center', 
                        backgroundColor: '#030a15', 
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${getPrevMovie(currentIndex)?.backdrop_path})`, 
                        backgroundPosition: 'right center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        alignSelf: 'stretch', 
                        width: '3vw'
                    }}>
                        <Avatar sx={{ cursor: 'pointer', visibility: 'hidden' }} alt="Prev" src="/images/icons/prev-arrow.png" onClick={onPrevArrowClick} />
                    </Box>
                    <HomeMovieHeroCard movie={movies[currentIndex]} genres={genres} />
                    <Box className="arrow-container" sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center', 
                        backgroundColor: '#030a15', 
                        alignSelf: 'stretch', 
                        width: '3vw'
                    }}>
                        <Avatar sx={{ cursor: 'pointer', visibility: 'hidden' }} alt="Next" src="/images/icons/next-arrow.png" onClick={onNextArrowClick} />
                    </Box>
                </Box>
            </>
        )
    } else {
        return (
            <>
                <Box sx={{ position:'relative', marginBottom: '5rem' }}>
                    <Box className="arrow-container" sx={{ 
                        position: 'absolute',
                        top: '50%',
                        left: '1vw',
                        height: '100%',
                        width: '3vw',
                    }}>
                        <Avatar sx={{ cursor: 'pointer', visibility: 'visible' }} alt="Prev" src="/images/icons/prev-arrow.png" onClick={onPrevArrowClick} />
                    </Box>
                    <HomeMovieHeroCard movie={movies[currentIndex]} genres={genres} />
                    <Box className="arrow-container" sx={{ 
                        position: 'absolute',
                        height: '100%',
                        top: '50%',
                        right: '1vw',
                        width: '3vw'
                    }}>
                        <Avatar sx={{ cursor: 'pointer', visibility: 'visible' }} alt="Next" src="/images/icons/next-arrow.png" onClick={onNextArrowClick} />
                    </Box>
                </Box>
            </>
        )
    }
}

export default HomeMovieHero;