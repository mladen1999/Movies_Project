import { useContext } from "react";
import SearchContext from "../../context/SearchContext";

const Navbar = () => {
  const { data, setData } = useContext(SearchContext);

  const onChangeHandler = (e) => {
    setData(e.target.value);
  };

  return (
    <div>
      <input type="text" value={data} onChange={onChangeHandler} />
    </div>
  );
};

export default Navbar;
