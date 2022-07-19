import { useState, useCallback } from 'react';
import axios from 'axios';

const api_key = 'ce9e45daf3c3e402535b6b3ea7d00ff0';

const tmdb = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
      // TODO: Jangan lupa masukkan API_KEY yang benarnya di sini yah !
      api_key: api_key,
    },
})

const GetGenreList = () => {
    const [data, setData] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(false);

    const fetch = async () => {
        try {
            setLoadingStatus(true);
            const response = await tmdb.get(`/genre/movie/list`, {

            }, {
                
            })

            setData(response.data.genres);
            setLoadingStatus(false);
        } catch (error) {
            console.log(error);
            setLoadingStatus(false);   
        }
    }

    return [data, loadingStatus, useCallback(fetch, [])];
}

const GetPopularMovies = () => {
    const [data, setData] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(false);

    const fetch = async () => {
        try {
            setLoadingStatus(true);
            const response = await tmdb.get(`/movie/popular`, {

            }, {
                
            })

            setData(response.data.results);
            setLoadingStatus(false);
        } catch (error) {
            console.log(error);
            setLoadingStatus(false);   
        }
    }

    return [data, loadingStatus, useCallback(fetch, [])];
}

const GetTopRatedMovies = () => {
    const [data, setData] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(false);

    const fetch = async () => {
        try {
            setLoadingStatus(true);
            const response = await tmdb.get(`/movie/top_rated`, {

            }, {
                
            })

            setData(response.data.results);
            setLoadingStatus(false);
        } catch (error) {
            console.log(error);
            setLoadingStatus(false);   
        }
    }

    return [data, loadingStatus, useCallback(fetch, [])];
}

const GetNowPlayingMovies = () => {
    const [data, setData] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(false);

    const fetch = async () => {
        try {
            setLoadingStatus(true);
            const response = await tmdb.get(`/movie/now_playing`, {

            }, {
                
            })

            setData(response.data.results);
            setLoadingStatus(false);
        } catch (error) {
            console.log(error);
            setLoadingStatus(false);   
        }
    }

    return [data, loadingStatus, useCallback(fetch, [])];
}

const GetUpcomingMovies = () => {
    const [data, setData] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(false);

    const fetch = async () => {
        try {
            setLoadingStatus(true);
            const response = await tmdb.get(`/movie/upcoming`, {

            }, {
                
            })

            setData(response.data.results);
            setLoadingStatus(false);
        } catch (error) {
            console.log(error);
            setLoadingStatus(false);   
        }
    }

    return [data, loadingStatus, useCallback(fetch, [])];
}

const GetPopularTVs = () => {
    const [data, setData] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(false);

    const fetch = async () => {
        try {
            setLoadingStatus(true);
            const response = await tmdb.get(`/tv/popular`, {

            }, {
                
            })

            setData(response.data.results);
            setLoadingStatus(false);
        } catch (error) {
            console.log(error);
            setLoadingStatus(false);   
        }
    }

    return [data, loadingStatus, useCallback(fetch, [])];
}

const GetAiringTodayTVs = () => {
    const [data, setData] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(false);

    const fetch = async () => {
        try {
            setLoadingStatus(true);
            const response = await tmdb.get(`/tv/airing_today`, {

            }, {
                
            })

            setData(response.data.results);
            setLoadingStatus(false);
        } catch (error) {
            console.log(error);
            setLoadingStatus(false);   
        }
    }

    return [data, loadingStatus, useCallback(fetch, [])];
}

const GetTopRatedTVs = () => {
    const [data, setData] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(false);

    const fetch = async () => {
        try {
            setLoadingStatus(true);
            const response = await tmdb.get(`/tv/top_rated`, {

            }, {
                
            })

            setData(response.data.results);
            setLoadingStatus(false);
        } catch (error) {
            console.log(error);
            setLoadingStatus(false);   
        }
    }

    return [data, loadingStatus, useCallback(fetch, [])];
}

export { GetGenreList, GetPopularMovies, GetTopRatedMovies, GetNowPlayingMovies, GetUpcomingMovies, GetPopularTVs, GetAiringTodayTVs, GetTopRatedTVs };

export default tmdb;