import "../App.css";
import SearchBar from "./Components/SearchBar";


function SearchClient() {

    return (
      <div>
        {/* Search Client text */}
        <h2 className="is-size-2 pb-6 has-text-weight-medium">Search Client</h2>
        {/* Search Bar */}
        <div className="App">
          <SearchBar placeHolder="Enter a CLient Name, Number, and State"/>
        </div>
      </div>
    );
}

export default SearchClient;
