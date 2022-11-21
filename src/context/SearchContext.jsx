import { createContext, useState } from "react";
const initialState = {
  data: "",
  setData: () => {},
};
const SearchContext = createContext(initialState);

export function SearchContextProvider({ children }) {
  const [data, setData] = useState();

  return (
    <SearchContext.Provider value={{ data, setData }}>
      {children}
    </SearchContext.Provider>
  );
}
export default SearchContext;
