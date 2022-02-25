import { useState,useContext } from "react"
import Alert from "./Alert";
import ShowsContext from "../context/shows/showsContext";
import alertsContext from "../context/alerts/AlertsContext";


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const showsContext = useContext(ShowsContext);

  const { alert, setAlert } = useContext(alertsContext);



    const { searchShows } = showsContext;

    
    const onSearchHandler = (e) => {
        e.preventDefault();


        if (searchTerm === "") {
      setAlert("Please enter something", "danger");
    } else {
      searchShows(searchTerm);
    }
  };

  return (
    <div className="searchbar">
         {alert ? <Alert message={alert.message} type={alert.type} /> : null}

        <form className="searchbar_form">

            <input type="text"
            placeholder="Search for your tv shows"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            
            
            />
            <button className="btn btn-block" onClick={onSearchHandler}>
             Search
            </button>


        </form>
        
        
    </div>
  )
}

export default SearchBar