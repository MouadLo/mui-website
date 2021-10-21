import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Toolbar,
	Tabs,
	Tab,
	Button,
	Menu,
	MenuItem,
} from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Link } from 'react-router-dom';

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
	logoContainer: {
		padding: 0,
		'&:hover': {
			backgroundColor: 'transparent',
		},
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
	menu: {
		backgroundColor: theme.palette.common.blue,
		color: 'white',
		borderRadius: '0px',
	},
	menuItem: {
		...theme.typography.tab,
		opacity: 0.7,
		'&:hover': {
			opacity: 1,
		},
	},
}));
export default function Header(props) {
	const classes = useStyles();
	const [value, setValue] = useState(0);
	const [anchorEL, setAnchoreEl] = useState(null);
	const [open, setOpen] = useState(false);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleClick = (e) => {
		setAnchoreEl(e.currentTarget);
		setOpen(true);
	};

	const handleClose = (e) => {
		setAnchoreEl(null);
		setOpen(false);
	};

	useEffect(() => {
		if (window.location.pathname === '/' && value !== 0) {
			setValue(0);
		} else if (window.location.pathname === '/services' && value !== 1) {
			setValue(1);
		} else if (window.location.pathname === '/revolution' && value !== 2) {
			setValue(2);
		} else if (window.location.pathname === '/about' && value !== 3) {
			setValue(3);
		} else if (window.location.pathname === '/contact' && value !== 4) {
			setValue(4);
		} else if (window.location.pathname === '/estimate' && value !== 5) {
			setValue(5);
		}
	}, [value]);

	return (
		<React.Fragment>
			<ElevationScroll {...props}>
				<AppBar position="fixed">
					<Toolbar disableGutters>
						<Button
							component={Link}
							onClick={() => setValue(0)}
							disableRipple
							to="/"
							className={classes.logoContainer}
						>
							<img className={classes.logo} src={logo} alt="company logo" />
						</Button>
						<Tabs
							value={value}
							onChange={handleChange}
							className={classes.tabContainer}
							indicatorColor="primary"
						>
							<Tab
								className={classes.tab}
								component={Link}
								to="/"
								label="Home"
							/>
							<Tab
								aria-owns={anchorEL ? 'simple-menu' : undefined}
								aria-haspopup={anchorEL ? 'true' : undefined}
								className={classes.tab}
								component={Link}
								onMouseOver={(e) => handleClick(e)}
								to="/services"
								label="Services"
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to="/revolution"
								label="The Revolution"
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to="/about"
								label="About Us"
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to="/contact"
								label="Contact Us"
							/>
						</Tabs>
						<Button
							component={Link}
							className={classes.button}
							variant="contained"
							color="secondary"
							to="/estimate"
							onClick={() => setValue(5)}
						>
							Free Estimate
						</Button>
						<Menu
							id="simple-menu"
							anchorEl={anchorEL}
							open={open}
							onClose={handleClose}
							classes={{ paper: classes.menu }}
							MenuListProps={{ onMouseLeave: handleClose }}
							elevation={0}
						>
							<MenuItem
								to="/services"
								classes={{ root: classes.menuItem }}
								component={Link}
								onClick={(e) => {
									handleChange(e);
									setValue(1);
								}}
							>
								Services
							</MenuItem>
							<MenuItem
								to="/customsoftware"
								classes={{ root: classes.menuItem }}
								component={Link}
								onClick={(e) => {
									handleChange(e);
									setValue(1);
								}}
							>
								Custom Software Development
							</MenuItem>
							<MenuItem
								to="/mobileappdev"
								classes={{ root: classes.menuItem }}
								component={Link}
								onClick={(e) => {
									handleChange(e);
									setValue(1);
								}}
							>
								Mobile App Development
							</MenuItem>
							<MenuItem
								to="/websitedev"
								classes={{ root: classes.menuItem }}
								component={Link}
								onClick={(e) => {
									handleChange(e);
									setValue(1);
								}}
							>
								Website Development
							</MenuItem>
						</Menu>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
}
