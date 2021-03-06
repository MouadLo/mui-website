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
	SwipeableDrawer,
	IconButton,
	List,
	ListItem,
	ListItemText,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
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
	drawerIconContainer: {
		marginLeft: 'auto',
		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
	drawerIcon: {
		height: '50px',
		width: '50px',
		[theme.breakpoints.down('xs')]: {
			height: '37.5px',
			width: '37.5px',
		},
	},
	drawer: {
		backgroundColor: theme.palette.common.blue,
		zIndex: 1451,
	},
	drawerItem: {
		...theme.typography.tab,
		color: 'white',
		opacity: 0.7,
	},
	drawerItemSelected: {
		'& .MuiListItemText-root': {
			opacity: 1,
		},
	},
	drawerItemEstimate: {
		backgroundColor: theme.palette.common.orange,
		color: 'black',
	},
	appbar: {
		zIndex: theme.zIndex.modal + 1,
	},
}));
export default function Header(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('md'));
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

	const [openDrawer, setOpenDrawer] = useState(false);

	const [anchorEL, setAnchoreEl] = useState(null);
	const [openMenu, setOpenMenu] = useState(false);
	

	const handleChange = (event, newValue) => {
		props.setValue(newValue);
	};

	const handleClick = (e) => {
		setAnchoreEl(e.currentTarget);
		setOpenMenu(true);
	};

	const handleMenuItemClick = (e, i) => {
		setAnchoreEl(null);
		setOpenMenu(false);
		props.setSelectedIndex(i);
	};

	const handleClose = (e) => {
		setAnchoreEl(null);
		setOpenMenu(false);
	};

	const menuOptions = [
		{
			name: 'Services',
			link: '/services',
			activeIndex: 1,
			selectedIndex: 0,
		},
		{
			name: 'Custom Software Development',
			link: '/customsoftware',
			activeIndex: 1,
			selectedIndex: 1,
		},
		{
			name: 'Mobile App Development',
			link: '/mobileappdev',
			activeIndex: 1,
			selectedIndex: 2,
		},
		{
			name: 'Website Development',
			link: '/websitedev',
			activeIndex: 1,
			selectedIndex: 3,
		},
	];
	const routes = [
		{ name: 'Home', link: '/', activeIndex: 0 },
		{
			name: 'Services',
			link: '/services',
			activeIndex: 1,
			ariaOwns: anchorEL ? 'simple-menu' : undefined,
			ariaPopup: anchorEL ? 'true' : undefined,
			mouseOver: (e) => handleClick(e),
		},
		{ name: 'The Revolution', link: '/revolution', activeIndex: 2 },
		{ name: 'About Us', link: '/about', activeIndex: 3 },
		{ name: 'Contact Us', link: '/contact', activeIndex: 4 },
	];
	useEffect(() => {
		[...menuOptions, ...routes].forEach(
			(route) => {
				switch (window.location.pathname) {
					case `${route.link}`:
						if (props.value !== route.activeIndex) {
							props.setValue(route.activeIndex);
							if (
								route.selectedIndex &&
								route.selectedIndex !== props.selectedIndex
							) {
								props.setSelectedIndex(route.selectedIndex);
							}
						}
						break;
					default:
						break;
				}
			}
		);
	}, [props.value, menuOptions, props.selectedIndex, routes]);

	const tabs = (
		<React.Fragment>
			<Tabs
				value={props.value}
				onChange={handleChange}
				className={classes.tabContainer}
				indicatorColor="primary"
			>
				{routes.map((route, index) => {
					return (
						<Tab
							key={`${route}${index}`}
							className={classes.tab}
							component={Link}
							to={route.link}
							label={route.name}
							aria-owns={route.ariaOwns}
							aria-haspopup={route.ariaPopup}
							onMouseOver={route.mouseOver}
						/>
					);
				})}
			</Tabs>
			<Button
				component={Link}
				className={classes.button}
				variant="contained"
				color="secondary"
				to="/estimate"
				onClick={() => props.setValue(false)}
			>
				Free Estimate
			</Button>
			<Menu
				id="simple-menu"
				anchorEl={anchorEL}
				open={openMenu}
				onClose={handleClose}
				classes={{ paper: classes.menu }}
				MenuListProps={{ onMouseLeave: handleClose }}
				elevation={0}
				keepMounted
				style={{ zIndex: 1320 }}
			>
				{menuOptions.map((menuOption, i) => (
					<MenuItem
						key={i}
						to={menuOption.link}
						classes={{ root: classes.menuItem }}
						component={Link}
						onClick={(e) => {
							handleMenuItemClick(e, i);
							props.setValue(1);
							handleClose();
						}}
						selected={i === props.selectedIndex && props.value === 1}
					>
						{menuOption.name}
					</MenuItem>
				))}
			</Menu>
		</React.Fragment>
	);

	const drawer = (
		<React.Fragment>
			<SwipeableDrawer
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				onOpen={() => setOpenDrawer(true)}
				classes={{ paper: classes.drawer }}
			>
				<div className={classes.toolbarMargin} />
				<List disablePadding>
					{routes.map((route, index) => {
						return (
							<ListItem
								key={`${route}${route.activeIndex}`}
								onClick={() => {
									setOpenDrawer(false);
									props.setValue(route.activeIndex);
								}}
								divider
								button
								component={Link}
								selected={props.value === route.activeIndex}
								classes={{ selected: classes.drawerItemSelected }}
								to={route.link}
							>
								<ListItemText className={classes.drawerItem} disableTypography>
									{route.name}
								</ListItemText>
							</ListItem>
						);
					})}

					<ListItem
						onClick={() => {
							setOpenDrawer(false);
							props.setValue(5);
						}}
						divider
						button
						component={Link}
						selected={props.value === 5}
						classes={{
							root: classes.drawerItemEstimate,
							selected: classes.drawerItemSelected,
						}}
						to="/estimate"
						className={classes.drawerItemEstimate}
					>
						<ListItemText className={classes.drawerItem} disableTypography>
							Free Estimate
						</ListItemText>
					</ListItem>
				</List>
			</SwipeableDrawer>
			<IconButton
				className={classes.drawerIconContainer}
				onClick={() => setOpenDrawer(!openDrawer)}
				disableRipple
			>
				<MenuIcon className={classes.drawerIcon} />
			</IconButton>
		</React.Fragment>
	);
	return (
		<React.Fragment>
			<ElevationScroll {...props}>
				<AppBar
					className={classes.root}
					position="fixed"
					className={classes.appbar}
				>
					<Toolbar disableGutters>
						<Button
							component={Link}
							onClick={() => props.setValue(0)}
							disableRipple
							to="/"
							className={classes.logoContainer}
						>
							<img className={classes.logo} src={logo} alt="company logo" />
						</Button>
						{matches ? drawer : tabs}
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
}
