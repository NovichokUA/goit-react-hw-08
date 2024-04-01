import { Link } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
    fontSize: 24,
    h1: {
      fontSize: 40,
    },
  },
});

const Image = styled("img")({
  maxWidth: "50%",
  height: "auto",
  borderRadius: 8,
});

const Home = () => {
  return (
    <Box sx={{ p: 2, display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <ThemeProvider theme={theme}>
          <Typography>
            Welcome to your phone book! Here you can store all important
            contacts so that you always have them at hand. Add new numbers. Sign
            up and start adding your first contact right now and make sure you
            never lose touch with those who matter to you. Happy using!
          </Typography>
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <Typography variant="h1">
            <Link to={"/register"}>Registration</Link>
          </Typography>
        </ThemeProvider>
      </Box>
      <Image
        src="https://cdn.pixabay.com/photo/2014/10/23/16/58/phone-499991_1280.jpg"
        alt="phone"
      />
    </Box>
  );
};
export default Home;
