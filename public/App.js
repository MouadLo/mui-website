import React, { useState } from 'react';
import {
	AppBar,
	Toolbar,
	useScrollTrigger,
	Container,
	Box,
	Typography,
	Button,
	makeStyles,
	ThemeProvider,
	Tabs,
	Tab,
	createTheme,
} from '@material-ui/core';

import './App.css';
import logo from './logo.png';

function ElevationScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}
const font = "'Amatic SC', cursive";
const theme = createTheme({
	palette: {
		common: {
			blue: `#131921`,
			orange: `#ff9900`,
		},
		primary: {
			main: `#131921`,
		},
		secondary: {
			main: `#ff9900`,
		},
	},
	typography: {
		tab: {
			fontFamily: font,
			textTransform: 'none',
			fontWeight: 900,
			fontSize: '9rem',
		},
		estimate: {
			fontFamily: font,
			fontSize: '1rem',
			textTransform: 'none',
		},
	},
});

const useStyles = makeStyles((theme) => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
	},
	logoContainer: {
		padding: 0,
		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
	logo: {
		height: '8em',
		[theme.breakpoints.up('md')]: {
			height: '7em',
		},
		[theme.breakpoints.down('xs')]: {
			height: '5.5em',
		},
	},
	tabContainer: {
		marginLeft: 'auto',
	},
	tab: {
		...theme.typography.tab,

		minWidth: 10,
		marginLeft: '25px',
	},
}));

function App(props) {
	const classes = useStyles();
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<ThemeProvider theme={theme}>
			<ElevationScroll {...props}>
				<AppBar position="fixed">
					<Toolbar>
						<Button className={classes.logoContainer}>
							<img className={classes.logo} src={logo} alt="company logo" />
						</Button>
						<Tabs
							className={classes.tabContainer}
							value={value}
							onChange={handleChange}
						>
							<Tab className={classes.tab} label="Hookahs" />
							<Tab className={classes.tab} label="Shisha" />
						</Tabs>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<Toolbar />
			<div className={classes.toolbarMargin} />
			{[...new Array(124)]
				.map(
					() => `Cras mattis consectetur purus sit amet fermentum.
							Cras justo odio, dapibus ac facilisis in, egestas eget quam.
							Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
							Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
				)
				.join('\n')}
			<Container>
				<Box sx={{ my: 2 }}></Box>
			</Container>
		</ThemeProvider>
	);
}

export default App;
