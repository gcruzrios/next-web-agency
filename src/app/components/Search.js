import React from "react";

function Search() {
  return (
    <div>
      {/* <!--popup search box--> */}
      <div id="search">
        <button type="button" className="close">
          ×
        </button>
        <form>
          <input type="search" value="" placeholder="type keyword(s) here" />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
      {/* <!--popup search box--> */}
    </div>
  );
}

export default Search;
