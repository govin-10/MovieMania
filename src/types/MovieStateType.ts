export interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  popularity: number;
  release_date: string;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  video: boolean;
  media_type?: string;
}

export interface TVShow {
  id: number;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  origin_country: string[];
  media_type?: string;
}

export interface MovieState {
  trendingMovies: Movie[];
  popularMovies: Movie[];
  trendingTV: TVShow[];
  popularTV: TVShow[];
  loading: boolean;
  error: string | null;
}
