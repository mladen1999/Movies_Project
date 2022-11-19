import { useEffect, useState } from "react";

const useHome = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://fake-movie-database-api.herokuapp.com/api?s=Batman`)
      .then((res) => res.json())
      .then((result) => {
        setMovies(result);
      });
  }, []);
  return { movies };
};

export default useHome;
