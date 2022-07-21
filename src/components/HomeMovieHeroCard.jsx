import React from 'react';
import { Avatar, Box, Typography, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

const HomeMovieHeroCard = ({ movie, genres }) => {
    const isMobile = useMediaQuery('(max-width:768px)');

    if (!isMobile) {
        return (
            <>
                <Link to={`/movie/${movie?.id}`} style={{ textDecoration: 'none', color: '#fff' }} >
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '80vh', width: '100%', backgroundColor: '#030a15' }}>
                        <Box sx={{ padding: '5rem 10rem 5rem 5rem', overflow: 'auto' }}>
                            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>{movie?.title}</Typography>
                            <br />
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#c9cbcc' }}>{movie?.genre_ids?.map((genre_id) => genres[genres?.findIndex((genre) => genre.id === genre_id)]?.name).join(" - ")}</Typography>
                            <br />
                            <Typography variant="body2" sx={{ color: '#c9cbcc' }}>{movie?.overview}</Typography>
                        </Box>
                        <Avatar
                            sx={{ width: '50%', height: '100%', maskImage: 'linear-gradient(to right, transparent 0%, transparent 5px, black 100%)' }}
                            variant="square"
                            alt={movie?.title}
                            src={"https://image.tmdb.org/t/p/original" + movie?.backdrop_path} />
                    </Box>
                </Link>
            </>
        )
    } else {
        return (
            <>
                <Link to={`/movie/${movie?.id}`} style={{ textDecoration: 'none', color: '#fff' }} >
                    <Box sx={{ position: 'relative', height: '50vh', width: '100%' }}>
                        <Box sx={{ position: 'absolute', maxWidth: '50%', bottom: '0.5rem', left: '5vw' }}>
                            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>{movie?.title}</Typography>
                        </Box>
                        <Avatar
                            sx={{ width: '100%', height: '100%', maskImage: 'linear-gradient(to right, transparent 0%, rgb(0,0,0,0.5) 50%, transparent 100%)', filter: 'darken(50)' }}
                            variant="square"
                            alt={movie?.title}
                            src={"https://image.tmdb.org/t/p/original" + movie?.backdrop_path} />
                    </Box>
                </Link>
            </>
        )
    }
}

export default HomeMovieHeroCard;