import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Tabs, Tab, Button } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

const useStyles = makeStyles((theme) => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: '2em',
	},
	logo: {
		height: '6em',
	},
	tabContainer: {
		marginLeft: 'auto',
	},
	tab: {
		...theme.typography.tab,
		minWidth: 10,
		marginLeft: '25px',
	},
	button: {
		...theme.typography.estimate,
		borderRadius: '50px',
		marginLeft: '50px',
		marginRight: '25px',
		height: '45px',
		color: 'white',
	},
}));
export default function Header(props) {
	const classes = useStyles();
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<React.Fragment>
			<ElevationScroll {...props}>
				<AppBar position="fixed">
					<Toolbar disableGutters>
						<img className={classes.logo} src={logo} alt="company logo" />
						<Tabs
							value={value}
							onChange={handleChange}
							className={classes.tabContainer}
							indicatorColor="primary"
						>
							<Tab className={classes.tab} label="Home" />
							<Tab className={classes.tab} label="Services" />
							<Tab className={classes.tab} label="The Revolution" />
							<Tab className={classes.tab} label="About Us" />
							<Tab className={classes.tab} label="Contact Us" />
						</Tabs>
						<Button
							className={classes.button}
							variant="contained"
							color="secondary"
						>
							Free Estimate
						</Button>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
}
