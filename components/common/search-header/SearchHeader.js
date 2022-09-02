import React from "react";

/* Components */
import { TextField } from "@mui/material";

/* Hook */
import Hook from "./hook.searchHeader";

const SearchHeader = () => {
  const {
    formValue,
    displaySuggest,
    suggestData,

    /* actions */
    setFormVal,
    handleEnterInput,
    handleOnChangeInput,
    handleSuggestion,
  } = Hook();

  return (
    <section className="search-header">
      <div className="container_x_md py-4">
        <div>
          <form onSubmit={handleEnterInput}>
            <TextField
              fullWidth
              label="Search for movies, series and celebrities"
              id="fullWidth"
              autoComplete="off"
              variant="filled"
              size="small"
              onChange={(e) => {
                setTimeout(() => {
                  handleOnChangeInput(e);
                }, 1500);
              }}
            />

            <div
              className={`absolute flex gap-y-1 flex-col z-[500] bg-dark ${
                displaySuggest ? "visible opacity-100" : " invisible opacity-0"
              }`}
            >
              {suggestData &&
                suggestData.map((item, index) => {
                  return (
                    <div
                      className="rounded cursor-pointer text-secondary px-4 py-3 bg-wah transition-all hover:text-dark hover:bg-wah"
                      key={index}
                      onClick={() => handleSuggestion(item)}
                    >
                      {item}
                    </div>
                  );
                })}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchHeader;
