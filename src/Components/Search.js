import React from "react";

const Search = ({ change }) => {
  return (
    <div className="flex justify-end pt-4 mr-14 ">
      <input
        type="search"
        className="search-bar"
        placeholder="Type to search"
        onChange={change}
            
      />
    </div>
  );
};
export default Search;
