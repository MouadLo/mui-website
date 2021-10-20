import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Box, Container } from '@material-ui/core';
import {
	createTheme,
	makeStyles,
	ThemeProvider,
} from '@material-ui/core/styles';
import Header from './ui/Header';

import theme from './ui/Theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/" exact component={() => <div>Home</div>} />
					<Route path="/services" exact component={() => <div>Services</div>} />
					<Route
						path="/revolution"
						exact
						component={() => <div>The Revolution</div>}
					/>
					<Route
						path="/contact"
						exact
						component={() => <div>Contact Us</div>}
					/>
					<Route path="/about" exact component={() => <div>About Us</div>} />
					<Route
						path="/estimate"
						exact
						component={() => <div>Free Estimate</div>}
					/>
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
