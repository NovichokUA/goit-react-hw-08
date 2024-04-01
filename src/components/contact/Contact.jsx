import { useDispatch } from "react-redux";

import { deleteContact } from "../../redux/contacts/operations";

import { Button, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const Contact = ({ user: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
          width: "400px",
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
            <Stack direction="row" spacing={2}>
              <Button
                onClick={() => dispatch(deleteContact(id))}
                variant="contained"
                color="inherit"
                startIcon={<DeleteIcon />}
                size="small"
              >
                Delete
              </Button>
            </Stack>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
};
