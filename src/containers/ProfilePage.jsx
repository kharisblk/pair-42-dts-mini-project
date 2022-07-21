// Gunakan theme di sini
import { Box, ThemeProvider } from "@mui/material";
import theme from "../themes/theme";
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import '../App.css';

// Gunakan MUI di sini
import { Button, Typography } from "@mui/material";

function Profile() {
    return (
        // Gunakan ThemeProvider di sini
        // Inject Context Theme di sini
        <ThemeProvider theme={theme}>
            <div className="App">
                <header className="App-header">
                    <Box p={2} >
                        <Typography variant="h2">Who's Watching ? </Typography>
                    </Box>
                    <Box p={2} sx={{
                        p: 2,
                        m: 2,
                        display: "flex",
                        gap: 2,
                    }} >
                        <Link to="/login">
                            <Avatar
                                alt="M Movie"
                                src="/images/Av01.jpg"
                                sx={{ width: 90, height: 90, display: { xs: 'none', md: 'flex' }, mr: 12 }}
                                variant="square"
                            />
                        </Link>
                        <Link to="/login">
                            <Avatar
                                alt="M Movie"
                                src="/images/Av02.jpg"
                                sx={{ width: 90, height: 90, display: { xs: 'none', md: 'flex' }, mr: 12 }}
                                variant="square"
                            />
                        </Link>
                        <Link to="/login">
                            <Avatar
                                alt="M Movie"
                                src="/images/Av03.jpg"
                                sx={{ width: 90, height: 90, display: { xs: 'none', md: 'flex' }, mr: 12 }}
                                variant="square"
                            />
                        </Link>
                        <Link to="/login">
                            <Avatar
                                alt="M Movie"
                                src="/images/Av04.jpg"
                                sx={{ width: 90, height: 90, display: { xs: 'none', md: 'flex' }, mr: 12 }}
                                variant="square"
                            />
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            p: 2,
                            display: "flex",
                            gap: 2,
                        }}
                    >
                        <Link to="/home">
                            <Button variant="contained" color="primary">
                                GO TO HOME
                            </Button>
                        </Link>

                        {/* <Button variant="contained" color="secondary">
              Halo Warna Biru
            </Button> */}
                    </Box>
                </header>
            </div>

            {/* Jangan lupa ditutup */}
        </ThemeProvider>
    );
}

export default Profile;