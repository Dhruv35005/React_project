import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [watchlist, setWatchlist] = useState([]);


  const toggleWatchlist = (movie) => {
    setWatchlist((prevList) => {
      if (prevList.some((item) => item.id === movie.id)) {
        return prevList.filter((item) => item.id !== movie.id);
      } else {
        return [...prevList, movie]; 
      }
    });
  };

  return (
    <BrowserRouter>
      <Navbar watchlistCount={watchlist.length} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Movies toggleWatchlist={toggleWatchlist} watchlist={watchlist} />
            </>
          }
        />
        <Route
          path="/watchlist"
          element={<WatchList watchlist={watchlist} toggleWatchlist={toggleWatchlist} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
