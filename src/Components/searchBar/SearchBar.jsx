import React from "react";
import { InputAdornment, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import "./SearchBar.css";

const SearchBar = ({ onHandleUserSearch, search }) => {
  return (
    <>
      <div className="searchbar-container">
        <TextField
          sx={{
            width: { md:300,lg:400 },
          }}
          variant="outlined"
          placeholder="Type to Search"
          // sx={{ width: 400 }}
          inputProps={{ style: { height: "5px" } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          value={search}
          onChange={(event) => onHandleUserSearch(event)}
        />
        <div>
          <FilterAltIcon className="filter-btn" />
        </div>
        {/* <Button
          sx={{
            width: 150,
          }}
          variant="contained"
          color="primary"
        >
          Create User
        </Button> */}
        <button id="create-user-btn">
          Create user
        </button>
      </div>
    </>
  );
};

export default SearchBar;
