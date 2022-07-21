import React, { useEffect } from 'react';
import MovieRow from '../components/MovieRow';
import HomeMovieHero from '../components/HomeMovieHero';
import TopMovieCard from '../components/TopMovieCard';

import { GetPopularMovies, GetNowPlayingMovies, GetUpcomingMovies, GetTopRatedMovies } from '../apis/tmdb';

const HomePage = () => {

    const [popularMovies, , fetchPopularMovies] = GetPopularMovies();
    const [popularMovies2, , fetchPopularMovies2] = GetPopularMovies(2);
    const [upcomingMovies, , fetchUpcomingMovies] = GetUpcomingMovies();
    const [nowPlayingMovies, , fetchNowPlayingMovies] = GetNowPlayingMovies();
    const [topRatedMovies, , fetchTopRatedMovies] = GetTopRatedMovies();
    const [popularMovies3, , fetchPopularMovies3] = GetPopularMovies(3);
    const [popularMovies4, , fetchPopularMovies4] = GetPopularMovies(4);

    useEffect(() => {
        document.title = "Movies | Home"
    }, [])

    useEffect(() => {
        const fetch = async () => {
            await fetchPopularMovies();
            await fetchPopularMovies2();
            await fetchUpcomingMovies();
            await fetchNowPlayingMovies();
            await fetchTopRatedMovies();
            await fetchPopularMovies3();
            await fetchPopularMovies4();
        }

        fetch();
    }, [fetchPopularMovies, fetchNowPlayingMovies, fetchUpcomingMovies, fetchPopularMovies2, fetchPopularMovies3, fetchPopularMovies4, fetchTopRatedMovies])

    return (
        <>
            <HomeMovieHero />

            <MovieRow title="Popular" movies={popularMovies} />
            <MovieRow title="Continue Watching" movies={popularMovies2} progress={true}/>
            <MovieRow title="Upcoming Movies" movies={upcomingMovies} />
            <MovieRow title="Originals" movies={nowPlayingMovies} imageField="poster_path" movieSx={{ width: '100%', height: 500}} />
            <MovieRow title="Top 10 Movies" movies={topRatedMovies.filter((item,index) => index<10)}>
                <TopMovieCard />
            </MovieRow>
            <MovieRow title="Watch Again" movies={popularMovies3} />
            <MovieRow title="My List" movies={popularMovies4} />
        </>
    )
}

export default HomePage;