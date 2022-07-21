import React from 'react';
import { Avatar, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const TopMovieCard = ({ movie, index, ENTRIES_ON_ONE_PAGE }) => {

    return (
        <Link to={`/movie/${movie?.id}`} style={{ width: 100/(ENTRIES_ON_ONE_PAGE) + "%" }}>
            <Box className="movie-card" key = {movie?.id} sx={{ position: 'relative', display: 'flex', flexDirection: 'row', alignItems: 'center', cursor:'pointer'}}>
                <Box sx={{ width: '50%', height: 200, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    {/* <Avatar 
                        variant = "square" 
                        alt = {index}
                        src = {`/images/${index}.png`} 
                        sx = {{ width: '70%'}} /> */}
                    <img alt={index} src={`/images/${index}.png`} />
                </Box>
                <Avatar 
                    variant = "square" 
                    alt = {movie?.title}
                    src = {"https://image.tmdb.org/t/p/original" + movie.poster_path} 
                    sx = {{ width: '50%', height: 200 }} />
            </Box>
        </Link>
    )
}

export default TopMovieCard;