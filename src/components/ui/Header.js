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
	useMediaQuery,
	useTheme,
} from '@material-ui/core';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Link } from 'react-router-dom';
import { green } from '@material-ui/core/colors';

import logo from '../../assets/logo.svg';
import { findAllByTestId } from '@testing-library/dom';

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
		marginBottom: '3em',
		[theme.breakpoints.down('md')]: {
			marginBottom: '2em',
		},
		[theme.breakpoints.down('xs')]: {
			marginBottom: '1.25em',
		},
	},
	logoContainer: {
		padding: 0,
		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
	logo: {
		height: '8em',
		[theme.breakpoints.down('md')]: {
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
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('md'));
	const [value, setValue] = useState(0);
	const [anchorEL, setAnchoreEl] = useState(null);
	const [open, setOpen] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleClick = (e) => {
		setAnchoreEl(e.currentTarget);
		setOpen(true);
	};

	const handleMenuItemClick = (e, i) => {
		setAnchoreEl(null);
		setOpen(false);
		setSelectedIndex(i);
	};

	const handleClose = (e) => {
		setAnchoreEl(null);
		setOpen(false);
	};

	const menuOptions = [
		{
			name: 'Services',
			link: '/services',
		},
		{
			name: 'Custom Software Development',
			link: '/customsoftware',
		},
		{
			name: 'Mobile App Development',
			link: '/mobileappdev',
		},
		{
			name: 'Website Development',
			link: '/websitedev',
		},
	];
	useEffect(() => {
		switch (window.location.pathname) {
			case '/':
				if (value !== 0) {
					setValue(0);
				}
				break;
			case '/services':
				if (value !== 1) {
					setSelectedIndex(0);
					setValue(1);
				}
				break;
			case '/revolution':
				if (value !== 2) {
					setValue(2);
				}
				break;
			case 'about':
				if (value !== 3) {
					setValue(3);
				}
			case '/contact':
				if (value !== 4) {
					setValue(4);
				}
				break;
			case '/estimate':
				if (value !== 5) {
					setValue(false);
				}
				break;
			case '/customsoftware':
				if (value !== 1) {
					setValue(1);
					setSelectedIndex(1);
				}
				break;
			case '/mobileappdev':
				if (value !== 1) {
					setValue(1);
					setSelectedIndex(2);
				}
				break;
			case '/websitedev':
				if (value !== 1) {
					setValue(1);
					setSelectedIndex(3);
				}
				break;
			default:
				break;
		}
	}, []);

	const tabs = (
		<React.Fragment>
			<Tabs
				value={value}
				onChange={handleChange}
				className={classes.tabContainer}
				indicatorColor="primary"
			>
				<Tab className={classes.tab} component={Link} to="/" label="Home" />
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
				onClick={() => setValue(false)}
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
				{menuOptions.map((menuOption, i) => (
					<MenuItem
						key={i}
						to={menuOption.link}
						classes={{ root: classes.menuItem }}
						component={Link}
						onClick={(e) => {
							handleMenuItemClick(e, i);
							setValue(1);
							handleClose();
						}}
						selected={i === selectedIndex && value === 1}
					>
						{menuOption.name}
					</MenuItem>
				))}
			</Menu>
		</React.Fragment>
	);
	return (
		<React.Fragment>
			<ElevationScroll {...props}>
				<AppBar className={classes.root} position="fixed">
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
						{matches ? null : tabs}
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
}
