import React, { useState, useEffect } from "react";

const moviePosters = [
  {
    title: "Avengers: Endgame",
    image: "https://igimage.indiaglitz.com/english/gallery/movies/avengersendgame/main.jpg",
  },
  {
    title: "Inception",
    image: "https://www.themoviedb.org/t/p/original/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
  },
  {
    title: "Interstellar",
    image: "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
  },
  {
    title: "The Dark Knight",
    image: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
];

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % moviePosters.length);
    }, 4000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative h-[30vh] md:h-[75vh] bg-cover bg-center flex items-end transition-opacity duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${moviePosters[currentIndex].image})` }}
    >
      
      <div className="absolute inset-0 bg-black/50"></div>

      
      <div className="relative text-white text-center w-full text-2xl md:text-4xl font-bold p-4 bg-gray-900/60">
        {moviePosters[currentIndex].title}
      </div>
    </div>
  );
}

export default Banner;
