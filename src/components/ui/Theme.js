import { createTheme } from '@material-ui/core/styles';

const leafBlue = '#0B72B9';
const leafOrange = '#FFBA60';

export default createTheme({
	palette: {
		common: {
			blue: `${leafBlue}`,
			orange: `${leafOrange}`,
		},
		primary: {
			main: `${leafBlue}`,
		},
		secondary: {
			main: `${leafOrange}`,
		},
	},
	typography: {
		tab: {
			fontFamily: 'Raleway',
			textTransform: 'none',
			fontWeight: 900,
			fontSize: '1rem',
		},
		estimate: {
			fontFamily: 'Pacifico',
			fontSize: '1rem',
			textTransform: 'none',
		},
	},
});
