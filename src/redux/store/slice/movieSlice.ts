import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {TMDB_API_KEY, BASE_URL} from '@env';
import axios from 'axios';
import {MovieStateTypes, MovieType, TVShowType} from '../../../types';

const initialState: MovieStateTypes = {
  trendingMovies: [],
  popularMovies: [],
  trendingTV: [],
  popularTV: [],
  loading: false,
  error: null,
};

interface MovieFetchResponse {
  trendingMovies: MovieType[];
  popularMovies: MovieType[];
}

interface TVFetchResponse {
  trendingTV: TVShowType[];
  popularTV: TVShowType[];
}

export const fetchMovie = createAsyncThunk<MovieFetchResponse>(
  'fetchMovieData',
  async (_, {rejectWithValue}) => {
    try {
      const trendingMoviesResponse = await axios.get(
        `${BASE_URL}/trending/movie/day?api_key=${TMDB_API_KEY}`,
      );
      const popularMoviesResponse = await axios.get(
        `${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
      );
      const trendingData = trendingMoviesResponse.data.results;
      const trendingMoviesSlice = trendingData.slice(0, 5);

      return {
        trendingMovies: trendingMoviesSlice,
        popularMovies: popularMoviesResponse.data.results,
      };
    } catch (error) {
      console.log(error);
      return rejectWithValue('Unable to fetch');
    }
  },
);

export const fetchTV = createAsyncThunk<TVFetchResponse>(
  'fetchTVData',
  async (_, {rejectWithValue}) => {
    try {
      const trendingTVResponse = await axios.get(
        `${BASE_URL}/trending/tv/day?api_key=${TMDB_API_KEY}`,
      );
      const popularTVResponse = await axios.get(
        `${BASE_URL}/tv/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
      );

      return {
        trendingTV: trendingTVResponse.data.results,
        popularTV: popularTVResponse.data.results,
      };
    } catch (error) {
      console.log(error);
      return rejectWithValue('Unable to fetch TV Shows');
    }
  },
);

const movieSlice = createSlice({
  name: 'fetchShows',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.trendingMovies = action.payload?.trendingMovies;
      state.popularMovies = action.payload?.popularMovies;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchMovie.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchMovie.rejected, (state, action) => {
      (state.loading = false), (state.error = action.payload as string);
    });
    builder.addCase(fetchTV.rejected, (state, action) => {
      (state.loading = false), (state.error = action.payload as string);
    });
    builder.addCase(fetchTV.fulfilled, (state, action) => {
      state.trendingTV = action.payload?.trendingTV;
      state.popularTV = action.payload?.popularTV;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchTV.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export default movieSlice.reducer;
