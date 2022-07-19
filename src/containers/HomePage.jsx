import React, { useEffect } from 'react';
import MovieRow from '../components/MovieRow';
import HomeMovieHero from '../components/HomeMovieHero';
import Footer from '../components/Footer';

import { GetPopularMovies, GetNowPlayingMovies, GetUpcomingMovies, GetPopularTVs, GetAiringTodayTVs, GetTopRatedTVs } from '../apis/tmdb';

const HomePage = () => {

    const [popularMovies, , fetchPopularMovies] = GetPopularMovies();
    const [nowPlayingMovies, , fetchNowPlayingMovies] = GetNowPlayingMovies();
    const [upcomingMovies, , fetchUpcomingMovies] = GetUpcomingMovies();
    const [popularTVs, , fetchPopularTVs] = GetPopularTVs();
    const [airingTodayTVs, , fetchAiringTodayTVs] = GetAiringTodayTVs();
    const [topRatedTVs, , fetchTopRatedTVs] = GetTopRatedTVs();

    useEffect(() => {
        const fetch = async () => {
            await fetchPopularMovies();
            await fetchNowPlayingMovies();
            await fetchUpcomingMovies();
            await fetchPopularTVs();
            await fetchAiringTodayTVs();
            await fetchTopRatedTVs();
        }

        fetch();
    }, [fetchPopularMovies, fetchNowPlayingMovies, fetchUpcomingMovies, fetchPopularTVs, fetchAiringTodayTVs, fetchTopRatedTVs])

    return (
        <>
            <HomeMovieHero />

            <MovieRow title="Popular" movies={popularMovies} />
            <MovieRow title="Continue Watching" movies={popularTVs} progress={true}/>
            <MovieRow title="Upcoming Movies" movies={upcomingMovies} />
            <MovieRow title="Originals" movies={nowPlayingMovies} imageField="poster_path" movieSx={{ width: '100%', height: 500}} />
            <MovieRow title="Top Indonesian" movies={airingTodayTVs} />
            <MovieRow title="Watch Again" movies={topRatedTVs} />

            <Footer />
        </>
    )
}

export default HomePage;