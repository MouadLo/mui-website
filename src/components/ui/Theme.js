import {
	createTheme,
	makeStyles,
	ThemeProvider,
} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

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
});
