import * as React from 'react';
// import logo from '../img/logo_M_movies.jpg';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedeemIcon from '@mui/icons-material/Redeem';
import { grey } from "@mui/material/colors";
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../authentication/firebase';
//react-firebase-hooks 
import { useAuthState } from 'react-firebase-hooks/auth';

const pages = ['Home', 'Series', 'Movies', 'New and Popular', 'My List'];

const ResponsiveAppBar = () => {
    const [user] = useAuthState(auth);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
        navigate("/home");
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };



    // const onLogout = () => {
    //     navigate("/login");
    // };
    const onLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to="/">
                        <Avatar
                            alt="M Movie"
                            src="/images/M.jfif"
                            sx={{ width: 72, height: 72, display: { xs: 'none', md: 'flex' }, mr: 12 }}
                            variant="square"
                        // onClick={navigate("/")}
                        />
                    </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {/* {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))} */}
                            <Typography textAlign="center">Home</Typography>
                            <Typography textAlign="center">Series</Typography>
                            <Typography textAlign="center">Movies</Typography>
                            <Typography textAlign="center">New and Popular</Typography>
                            <Typography textAlign="center">My List</Typography>

                        </Menu>

                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 3, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <IconButton size="large" aria-label="search" color="inherit" sx={{ mr: 2 }}>
                        <SearchIcon />
                    </IconButton>
                    <IconButton size="large" aria-label="redeem" color="inherit" sx={{ mr: 2 }}>
                        <RedeemIcon ></RedeemIcon>
                    </IconButton>
                    <Typography color="inherit" sx={{ mr: 2 }}>{user?.email}</Typography>
                    <IconButton size="large" aria-label="notification" color="inherit" sx={{ mr: 4 }}>
                        <Badge badgeContent={3} color="error" >
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <Box sx={{ flexGrow: 0 }}>
                        {/* <Link to='profile'><Avatar alt="User" src="/images/av03.jpg" variant="square" /></Link> */}
                        <Avatar alt="User" src="/images/av03.jpg" variant="square" />
                        <Tooltip title="Keluar">
                            <IconButton sx={{ p: 0 }} onClick={handleOpenUserMenu}>
                                {/* <Avatar alt="User" src="/images/av03.jpg" variant="square" /> */}
                                <ArrowDropDownIcon fontSize="large" sx={{ color: grey[100] }} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {/* {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))} */}

                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center" onClick={onLogout}>Logout</Typography>
                                {/* <Typography textAlign="center" onClick={user?.onLogout:onLogin}>Logout</Typography> */}
                            </MenuItem>

                        </Menu>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default ResponsiveAppBar;