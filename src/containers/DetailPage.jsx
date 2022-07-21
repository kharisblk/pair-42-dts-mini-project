import React, { useEffect } from 'react';
import { useParams, useNavigate, Outlet } from 'react-router';
import { Box, Typography } from '@mui/material';
import MovieRow from '../components/MovieRow';
import { GetPopularMovies, GetUpcomingMovies, GetNowPlayingMovies, GetMovieDetails } from '../apis/tmdb';

const DetailPage = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [detail, , isError, fetchDetail] = GetMovieDetails();

    const [popularMovies, , fetchPopularMovies] = GetPopularMovies();
    const [popularMovies2, , fetchPopularMovies2] = GetPopularMovies(2);
    const [upcomingMovies, , fetchUpcomingMovies] = GetUpcomingMovies();
    const [nowPlayingMovies, , fetchNowPlayingMovies] = GetNowPlayingMovies();

    useEffect(() => {
        document.title = "Movies | " + detail?.title
    }, [detail])

    useEffect(() => {
        const fetch = async() => {
            await fetchPopularMovies();
            await fetchPopularMovies2();
            await fetchUpcomingMovies();
            await fetchNowPlayingMovies();
        }
        
        fetch();
    }, [fetchPopularMovies, fetchPopularMovies2, fetchUpcomingMovies, fetchNowPlayingMovies])

    useEffect(() => {
        fetchDetail(params.movieId);
    }, [fetchDetail, params.movieId])

    useEffect(() => {
        if (isError){
            navigate('/not-found');
        }
    }, [isError, navigate])

    console.log(detail, isError);

    return (
        <>
            <Outlet />
            <Box sx={{ padding: '3rem 5vw' }}>
                <Typography variant="h4">Description:</Typography>
                <Typography variant="h6">{detail?.overview}</Typography>
            </Box>
            <MovieRow title="Popular" movies={popularMovies} />
            <MovieRow title="Continue Watching" movies={popularMovies2} progress={true}/>
            <MovieRow title="Upcoming Movies" movies={upcomingMovies} />
            <MovieRow title="Originals" movies={nowPlayingMovies} imageField="poster_path" movieSx={{ width: '100%', height: 500}} />
        </>
    )
}

export default DetailPage;