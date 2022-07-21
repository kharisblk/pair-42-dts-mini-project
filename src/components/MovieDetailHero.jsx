import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { GetMovieDetails } from '../apis/tmdb';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';

const MovieDetailHero = () => {
    const isMobile = useMediaQuery('(max-width:899px)');

    const params = useParams();
    const navigate = useNavigate();

    const [detail, , isError, fetchDetail] = GetMovieDetails();

    useEffect(() => {
        fetchDetail(params.movieId);
    }, [fetchDetail, params.movieId])

    useEffect(() => {
        window.scrollTo(0,0);
    }, [params.movieId])

    useEffect(() => {
        if (isError){ // kalau tidak ketemu idnya, redirect balik ke home
            navigate('/not-found');
        }
    }, [isError, navigate])

    if (!isMobile){
        return (
            <>
                <Box sx={{ 
                    width: '100%', 
                    height: '90vh', 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(https://image.tmdb.org/t/p/original${detail?.backdrop_path})`, 
                    backgroundSize: 'cover', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center'
                }}>
                    <Box sx={{ width: '40%', maxWidth: 600, padding: '5rem 5vw' }}>
                        <Typography sx={{ fontWeight: 'bold' }} variant="h3">{detail?.title}</Typography>
                        <br/>
                        <Typography variant="h6">{detail?.overview}</Typography>
                        <br/>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Button 
                                href={`/movie/${params.movieId}/play`} 
                                sx={{ width: '35%', backgroundColor: '#fff', color: '#000', '&:hover': { color: '#fff' }, fontSize: '1.5rem' }} 
                                variant="contained">
                                <img src="/images/icons/play-button.png" alt="Play" />&nbsp;Play
                            </Button>
                            <Button 
                                href={detail?.homepage} 
                                sx={{ width: '60%', backgroundColor: 'rgb(0,0,0,0.4)', color: '#fff', '&:hover': { color: '#fff' }, fontSize: '1.5rem'  }} 
                                variant="contained">
                                <img src="/images/icons/more-information.png" alt="More Information" />&nbsp;More Information
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </>
        )
    } else {
        return (
            <>
                <Box sx={{ 
                    width: '100%', 
                    height: '50vh', 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(https://image.tmdb.org/t/p/original${detail?.backdrop_path})`, 
                    backgroundSize: 'cover', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'flex-end'
                }}>
                    <Box sx={{ width: '60%', maxWidth: 600, padding: '2rem 5vw' }}> 
                        <Typography sx={{ fontWeight: 'bold' }} variant="h3">{detail?.title}</Typography>
                        <br/>
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
                            <Button 
                                href={`/movie/${params.movieId}/play`} 
                                sx={{ backgroundColor: '#fff', color: '#000', '&:hover': { color: '#fff' }, fontSize: '1.5rem' }} 
                                variant="contained">
                                <img src="/images/icons/play-button.png" alt="Play" />&nbsp;Play
                            </Button>
                            <Button 
                                href={detail?.homepage} 
                                sx={{ backgroundColor: 'rgb(0,0,0,0.4)', color: '#fff', '&:hover': { color: '#fff' }, fontSize: '1.5rem'  }} 
                                variant="contained">
                                <img src="/images/icons/more-information.png" alt="More Information" />
                            </Button>
                        </Box>
                        <br/>
                        <Typography variant="h6" sx={{ width: '100%', textOverflow: 'ellipsis', display: '-webkit-box', overflow:'hidden', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, }} >{detail?.overview}</Typography>
                    </Box>
                </Box>
            </>
        )
    }
}

export default MovieDetailHero;