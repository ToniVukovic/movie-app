import React from "react";

const SearchBox = (props) => {
  return (
    <div className="">
      <input
        className=""
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Type to search..."
      />
    </div>
  );
};

export default SearchBox;
