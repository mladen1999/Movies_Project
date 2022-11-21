import { useContext, useEffect, useState } from "react";
import SearchContext from "../../context/SearchContext";
const useHome = () => {
  const { data } = useContext(SearchContext);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://fake-movie-database-api.herokuapp.com/api?s=${data}`)
      .then((res) => res.json())
      .then((result) => {
        setMovies(result);
      });
  }, [data, movies]);
  return { movies };
};

export default useHome;
