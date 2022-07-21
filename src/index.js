import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInSide from "./containers/Login";
import SignUp from "./containers/Register";
import HomePage from "./containers/HomePage";
import DetailPage from "./containers/DetailPage";
import DetailVideoPage from "./containers/DetailVideoPage";
import MovieDetailHero from "./components/MovieDetailHero";
import { Button } from "@mui/material";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./containers/ProfilePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					{/* <Route path="home" element={<HomePage />} /> */}
					<Route
						path="movie"
						element={
							<ProtectedRoute>
								<DetailPage />
							</ProtectedRoute>
						}
					>
						<Route path=":movieId/play" element={<DetailVideoPage />} />
						<Route path=":movieId" element={<MovieDetailHero />} />
					</Route>
					<Route path="/" element={<Profile />} />
					<Route path="/home" element={<HomePage />} />
					<Route
						path="*"
						element={
							<main style={{ padding: "1rem 15rem" }}>
								<p>There's nothing here!</p>
								<Button href="/" variant="contained">
									Go Back
								</Button>
							</main>
						}
					/>
				</Route>
				{/* <Route path="login" element={<Login />} /> */}
				<Route
					path="login"
					element={
						<ProtectedRoute loginOnly={false}>
							<SignInSide />
						</ProtectedRoute>
					}
				/>
				{/* <Route path="register" element={<Register />} /> */}
				<Route
					path="register"
					element={
						<ProtectedRoute loginOnly={false}>
							<SignUp />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
