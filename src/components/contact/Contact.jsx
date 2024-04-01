import { useDispatch } from "react-redux";
import { useState } from "react";

import { deleteContact } from "../../redux/contacts/operations";

import { Button, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import toast from "react-hot-toast";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export const Contact = ({ user: { id, name, number } }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
          width: "450px",
        }}
        autoComplete="off"
      >
        <Card
          sx={{
            margin: "8px",
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            "& > :not(style)": { m: 1 },
            bgcolor: "#ffd180",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              <PhoneIcon /> {number}
            </Typography>
          </CardContent>

          <CardActions>
            <Button variant="outlined" color="error" onClick={handleClickOpen}>
              Delete contact
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert"
              aria-describedby="alert-description"
            >
              <DialogTitle id="alert">
                {"Should I delete this contact?"}
              </DialogTitle>

              <DialogContent>
                <DialogContentText id="alert-description">
                  The action cannot be undone. Are you sure you want to delete
                  this contact?
                </DialogContentText>
              </DialogContent>

              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>

                <Stack direction="row" spacing={2}>
                  <Button
                    onClick={() =>
                      dispatch(deleteContact(id))
                        .unwrap()
                        .then(() => {
                          toast.success("The operation is successful.");
                        })
                    }
                    color="error"
                    autoFocus
                    variant="contained"
                    startIcon={<DeleteIcon />}
                    size="small"
                  >
                    Delete
                  </Button>
                </Stack>
              </DialogActions>
            </Dialog>
            {/* <Stack direction="row" spacing={2}>
              <Button
                onClick={() =>
                  dispatch(deleteContact(id))
                    .unwrap()
                    .then(() => {
                      toast.success("The operation is successful.");
                    })
                }
                variant="contained"
                color="inherit"
                startIcon={<DeleteIcon />}
                size="small"
              >
                Delete
              </Button>
            </Stack> */}
          </CardActions>
        </Card>
      </Box>
    </div>
  );
};
