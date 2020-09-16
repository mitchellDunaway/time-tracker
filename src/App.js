import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import './App.css';

function App() {

	

	return (
		// <BrowserRouter>
		// 	<div className="app">
		// 		<Route component={Home} path="/" exact />
		// 	</div>
		// </BrowserRouter>
		newFunction()
	);

	function newFunction() {
		console.log("blegh");
		return <div>smello world</div>;
	}
}

export default App;
