import { useState, useCallback } from "react";
import axios from "axios";

// const api_key = 'ce9e45daf3c3e402535b6b3ea7d00ff0';
const api_key = process.env.REACT_APP_TMDB_KEY;

const tmdb = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	params: {
		// TODO: Jangan lupa masukkan API_KEY yang benarnya di sini yah !
		api_key: api_key,
	},
});

const GetGenreList = () => {
	const [data, setData] = useState([]);
	const [loadingStatus, setLoadingStatus] = useState(false);

	const fetch = async () => {
		try {
			setLoadingStatus(true);
			const response = await tmdb.get(`/genre/movie/list`, {}, {});

			setData(response.data.genres);
			setLoadingStatus(false);
		} catch (error) {
			console.log(error);
			setLoadingStatus(false);
		}
	};

	return [data, loadingStatus, useCallback(fetch, [])];
};

const GetPopularMovies = (page = 1) => {
	const [data, setData] = useState([]);
	const [loadingStatus, setLoadingStatus] = useState(false);

	const fetch = async () => {
		try {
			setLoadingStatus(true);
			const response = await tmdb.get(`/movie/popular?page=${page}`, {}, {});

			setData(response.data.results);
			setLoadingStatus(false);
		} catch (error) {
			console.log(error);
			setLoadingStatus(false);
		}
	};

	return [data, loadingStatus, useCallback(fetch, [page])];
};

const GetTopRatedMovies = (page = 1) => {
	const [data, setData] = useState([]);
	const [loadingStatus, setLoadingStatus] = useState(false);

	const fetch = async () => {
		try {
			setLoadingStatus(true);
			const response = await tmdb.get(`/movie/top_rated?page=${page}`, {}, {});

			setData(response.data.results);
			setLoadingStatus(false);
		} catch (error) {
			console.log(error);
			setLoadingStatus(false);
		}
	};

	return [data, loadingStatus, useCallback(fetch, [page])];
};

const GetNowPlayingMovies = (page = 1) => {
	const [data, setData] = useState([]);
	const [loadingStatus, setLoadingStatus] = useState(false);

	const fetch = async () => {
		try {
			setLoadingStatus(true);
			const response = await tmdb.get(
				`/movie/now_playing?page=${page}`,
				{},
				{}
			);

			setData(response.data.results);
			setLoadingStatus(false);
		} catch (error) {
			console.log(error);
			setLoadingStatus(false);
		}
	};

	return [data, loadingStatus, useCallback(fetch, [page])];
};

const GetUpcomingMovies = (page = 1) => {
	const [data, setData] = useState([]);
	const [loadingStatus, setLoadingStatus] = useState(false);

	const fetch = async () => {
		try {
			setLoadingStatus(true);
			const response = await tmdb.get(`/movie/upcoming?page=${page}`, {}, {});

			setData(response.data.results);
			setLoadingStatus(false);
		} catch (error) {
			console.log(error);
			setLoadingStatus(false);
		}
	};

	return [data, loadingStatus, useCallback(fetch, [page])];
};

const GetMovieDetails = () => {
	const [data, setData] = useState({});
	const [loadingStatus, setLoadingStatus] = useState(false);
	const [error, setError] = useState(null);

	const fetch = async (id) => {
		try {
			setLoadingStatus(true);
			const response = await tmdb.get(`/movie/${id}`, {}, {});

			setData(response.data);
			setLoadingStatus(false);
		} catch (error) {
			console.log(error);
			setError(error);
			setLoadingStatus(false);
		}
	};

	return [data, loadingStatus, error, useCallback(fetch, [])];
};

const GetMovieTrailer = () => {
	const [data, setData] = useState({});
	const [loadingStatus, setLoadingStatus] = useState(false);
	const [error, setError] = useState(null);

	const fetch = async (id) => {
		try {
			setLoadingStatus(true);
			const response = await tmdb.get(`/movie/${id}/videos`, {}, {});
			setData(response.data);
			setLoadingStatus(false);
		} catch (error) {
			console.log(error);
			setError(error);
			setLoadingStatus(false);
		}
	};

	return [data, loadingStatus, error, useCallback(fetch, [])];
};

export {
	GetGenreList,
	GetPopularMovies,
	GetTopRatedMovies,
	GetNowPlayingMovies,
	GetUpcomingMovies,
	GetMovieDetails,
	GetMovieTrailer,
};

export default tmdb;
