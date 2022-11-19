import Card from "../../components/Card/Card";
import useHome from "./useHome";

const Home = () => {
  const { movies } = useHome(
    `https://fake-movie-database-api.herokuapp.com/api?s=Batman`
  );

  return (
    <div>
      {movies.Search?.map(
        (item) => movies && <Card key={item.imdbID} {...item} />
      )}
    </div>
  );
};

export default Home;
