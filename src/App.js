// import logo from './logo.svg';
// import './App.css';
import { ThemeProvider } from "@mui/material";
import ResponsiveAppBar from "./components/NavBar";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
import theme from "./themes/theme";
function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				{/* <Navbar /> */}
				<ResponsiveAppBar />
				<Outlet/>
        		<Footer/>
			</div>
		</ThemeProvider>
	);
}

export default App;