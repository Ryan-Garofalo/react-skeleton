import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyCHuNxaPdbe3ibBtqu1mRct253V52DzEes";

const App = () => {
    return (
        <div>
            <SearchBar />;
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector(".container"));
