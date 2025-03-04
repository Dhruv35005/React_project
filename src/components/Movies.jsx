import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import axios from "axios";

function Movies({ toggleWatchlist, watchlist }) {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=87d0d40618a5665eedb93da4cab99904&language=en-US&page=${currentPage}`)
      .then((res) => {
        setMovies(res.data.results);
        setTotalPages(res.data.total_pages);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, [currentPage]);


  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=87d0d40618a5665eedb93da4cab99904&language=en-US`)
      .then((res) => setGenres(res.data.genres))
      .catch((error) => console.error("Error fetching genres:", error));
  }, []);


  const filteredMovies = selectedGenre
    ? movies.filter((movie) => movie.genre_ids.includes(parseInt(selectedGenre)))
    : movies;

  return (
    <div className="p-5">
      <div className="text-2xl text-center font-bold m-2">Trending Movies</div>

    
      <div className="flex justify-center my-4">
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="px-4 py-2 border border-gray-400 rounded-md bg-gray-800 text-white cursor-pointer"
        >
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>

    
      <div className="flex flex-wrap justify-center gap-6">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              toggleWatchlist={toggleWatchlist}
              watchlist={watchlist}
            />
          ))
        ) : (
          <p className="text-center text-white">No movies found in this genre.</p>
        )}
      </div>


      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(newPage) => setCurrentPage(newPage)}
      />
    </div>
  );
}

export default Movies;
