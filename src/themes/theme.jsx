// import createTheme di sini
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: grey[900],
        },
        secondary: {
            main: grey[700],
        },
    },
});

export default theme;