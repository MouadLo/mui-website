import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from './ui/Header';
import Footer from './ui/Footer';
import theme from './ui/Theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route
						path="/"
						exact
						component={() => <div style={{ height: '2000px' }}>Home</div>}
					/>
					<Route path="/services" component={() => <div>Services</div>} />
					<Route
						path="/revolution"
						component={() => <div>The Revolution</div>}
					/>
					<Route path="/contact" component={() => <div>Contact Us</div>} />
					<Route path="/about" component={() => <div>About Us</div>} />
					<Route path="/estimate" component={() => <div>Free Estimate</div>} />
					<Route
						path="/customsoftware"
						component={() => <div>Custome Software</div>}
					/>
					<Route
						path="/mobileappdev"
						component={() => <div>Mobile App Development</div>}
					/>
					<Route
						path="/websitedev"
						component={() => <div>Website Development</div>}
					/>
				</Switch>
				<Footer />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
