import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

import { Button, Stack } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import css from "./UserMenu.module.css";
import toast from "react-hot-toast";

const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div>
      <p className={css.title}>Hello, {name}</p>
      <Stack direction="row" spacing={2} color="#616161">
        <Button
          onClick={() =>
            dispatch(logOut())
              .unwrap()
              .then(() => {
                toast.success("Good luck. We are waiting for you later!");
              })
          }
          type="button"
          variant="contained"
          color="inherit"
          startIcon={<ExitToAppIcon />}
          size="small"
        >
          Log Out
        </Button>
      </Stack>
    </div>
  );
};

export default UserMenu;
