import React from 'react';
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
			<Header />
			hello
		</ThemeProvider>
	);
}

export default App;
