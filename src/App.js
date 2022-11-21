import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import { SearchContextProvider } from "./context/SearchContext";

function App() {
  return (
    <div>
      <SearchContextProvider>
        <Navbar />
        <Home />
      </SearchContextProvider>
    </div>
  );
}

export default App;
