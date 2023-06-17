import React from "react";

/* Hook */
import Hook from "./hook.searchInput";

/* Components */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SearchInput = () => {
  const {
    formValue,

    /* Actions */
    setFormValue,
    enterHandler,
    changeHandler,
  } = Hook();

  return (
    <section className="py-14 bg-secondary">
      <div className="container_x_md">
        <div className="flex justify-center items-center">
          <div className="w-full md:w-4/5 lg:w-1/2 flex gap-y-3 flex-col">
            <h1 className="text-white font-special font-bold">Explore Now</h1>
            <form onSubmit={enterHandler} className="flex relative">
              <TextField
                fullWidth
                label="Movies or Series"
                id="fullWidth"
                autoComplete="off"
                value={formValue}
                variant="outlined"
                onChange={changeHandler}
              />
              <Button type="submit" variant="contained mr-auto" className="btn-search absolute right-2 top-1/2 -translate-y-1/2">
                Search
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchInput;
