// import logo from './logo.svg';
// import './App.css';
import { ThemeProvider } from "@mui/material";
import ResponsiveAppBar from "./components/NavBar";
import Home from "./containers/Home";
import theme from "./themes/theme";
function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				{/* <Navbar /> */}
				<ResponsiveAppBar />
				<Home />
			</div>
		</ThemeProvider>
	);
}

export default App;
