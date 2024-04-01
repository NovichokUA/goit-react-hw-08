import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filters/slice";

import css from "./SearchBox.module.css";

import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

export const SearchBox = () => {
  const value = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
          width: "580px",
        }}
        autoComplete="off"
      >
        <label className={css.label}>
          <TextField
            value={value}
            onChange={(e) => {
              dispatch(changeFilter(e.target.value));
            }}
            label="Find contacts by name or number"
            type="text"
            name="name"
            fullWidth
            variant="outlined"
            margin="dense"
            helperText="Find contacts by name or number."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </label>
      </Box>
    </div>
  );
};
