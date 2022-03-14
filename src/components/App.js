import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from './ui/Header';
import Footer from './ui/Footer';
import theme from './ui/Theme';

function App() {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [value, setValue] = useState(0);
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header
					value={value}
					setValue={setValue}
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
				/>
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
					<Route path="/vision" component={() => <div>Vision</div>} />
					<Route path="/process" component={() => <div>Process</div>} />
					<Route path="/technology" component={() => <div>Technology</div>} />
					<Route path="/history" component={() => <div>History</div>} />
					<Route path="/team" component={() => <div>Team</div>} />
				</Switch>
				<Footer
					value={value}
					setValue={setValue}
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
				/>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
