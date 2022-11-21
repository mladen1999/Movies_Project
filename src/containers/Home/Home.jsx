import Card from "../../components/Card/Card";
import useHome from "./useHome";

const Home = () => {
  const { movies } = useHome();

  return (
    <div className="cards">
      {movies.Search?.map(
        (item) => movies && <Card key={item.imdbID} {...item} />
      )}
    </div>
  );
};

export default Home;
