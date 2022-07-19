import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { GetMovieTrailer } from '../apis/tmdb';
import { Box } from '@mui/material';

const DetailVideoPage = () => {
    const [notFound, setNotFound] = useState(false);
    const [link, setLink] = useState('');

    const params = useParams();
    const navigate = useNavigate();

    const [trailer, , isError, fetchTrailer] = GetMovieTrailer();
    
    useEffect(() => {
        fetchTrailer(params.movieId);
    }, [params.movieId, fetchTrailer])

    useEffect(() => {
        if (isError || notFound){
            navigate(`/movie/${params.movieId}`);
        }
    }, [isError, notFound, params.movieId, navigate])

    useEffect(() => {
        if (trailer && Object.keys(trailer) && trailer.results){
            const videoIndex = trailer?.results?.findIndex((item) => item.site==="YouTube");
            if (videoIndex !== -1){
                setLink(`https://www.youtube.com/embed/${trailer?.results[videoIndex]?.key}`);
            } else {
                setNotFound(true);
            }
        }
    }, [trailer])

    return (
        <>
            <Box>
                { trailer ? 
                    <iframe 
                        style={{ width: '100%', height: '90vh' }} 
                        src={link}
                        title="YouTube video player" 
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                : null}
            </Box>
        </>
    )
}

export default DetailVideoPage;