import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Grid, Hidden } from '@material-ui/core';

import footerAdornment from '../../assets/Footer_Adornment.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: theme.palette.common.blue,
		width: '100%',
		zIndex: 1302,
		position: 'relative',
	},
	adornment: {
		width: '25em',
		verticalAlign: 'bottom',
		[theme.breakpoints.down('md')]: {
			width: '21em',
		},
		[theme.breakpoints.down('xs')]: {
			width: '15em',
		},
	},
	mainContainer: {
		position: 'absolute',
	},
	link: {
		color: 'white',
		fontFamily: 'Ariel',
		fontSize: '0.75rem',
		fontWeight: 'bold',
	},
	gridItem: {
		margin: '2.9rem',
	},
	icon: {
		height: '4em',
		width: '4em',
		[theme.breakpoints.down('md')]: {
			height: '3.5em',
			width: '3.5em',
		},
		[theme.breakpoints.down('xs')]: {
			height: '2.5em',
			width: '2.5em',
		},
	},
	socialContainer: {
		position: 'absolute',
		marginTop: '-6em',
		right: '1.5em',
		[theme.breakpoints.down('md')]: {
			right: '1em',
		},
		[theme.breakpoints.down('xs')]: {
			right: '0.6em',
		},
	},
}));
export default function Footer(props) {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<Hidden mdDown>
				<Grid
					container
					justifyContent="center"
					spacing={4}
					className={classes.mainContainer}
				>
					<Grid item className={classes.gridItem}>
						<Grid container direction="column">
							<Grid
								component={Link}
								onClick={() => props.setValue(0)}
								to="/"
								item
								className={classes.link}
							>
								Home
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container spacing={2} direction="column">
							<Grid
								component={Link}
								to="/services"
								onClick={() => {
									props.setValue(1);
									props.setSelectedIndex(0);
								}}
								item
								className={classes.link}
							>
								Services
							</Grid>
							<Grid
								component={Link}
								to="/customsoftware"
								onClick={() => {
									props.setValue(1);
									props.setSelectedIndex(1);
								}}
								item
								className={classes.link}
							>
								Custom Software Development
							</Grid>
							<Grid
								component={Link}
								to="/mobileappdev"
								onClick={() => {
									props.setValue(1);
									props.setSelectedIndex(2);
								}}
								item
								className={classes.link}
							>
								Mobile App Development
							</Grid>
							<Grid
								component={Link}
								to="/websitedev"
								onClick={() => {
									props.setValue(1);
									props.setSelectedIndex(3);
								}}
								item
								className={classes.link}
							>
								Website Development
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container spacing={2} direction="column">
							<Grid
								component={Link}
								to="/revolution"
								onClick={() => props.setValue(2)}
								item
								className={classes.link}
							>
								The Revolution
							</Grid>
							<Grid
								component={Link}
								to="/vision"
								onClick={() => props.setValue(2)}
								item
								className={classes.link}
							>
								Vision
							</Grid>
							<Grid
								component={Link}
								to="/technology"
								onClick={() => props.setValue(2)}
								item
								className={classes.link}
							>
								Technology
							</Grid>
							<Grid
								component={Link}
								to="/process"
								onClick={() => props.setValue(2)}
								item
								className={classes.link}
							>
								Process
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container spacing={2} direction="column">
							<Grid
								component={Link}
								to="/about"
								onClick={() => props.setValue(3)}
								item
								className={classes.link}
							>
								About Us
							</Grid>
							<Grid
								component={Link}
								to="/history"
								onClick={() => props.setValue(3)}
								item
								className={classes.link}
							>
								History
							</Grid>
							<Grid
								component={Link}
								to="/team"
								onClick={() => props.setValue(3)}
								item
								className={classes.link}
							>
								Team
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container spacing={2} direction="column">
							<Grid
								component={Link}
								to="/contact"
								onClick={() => props.setValue(4)}
								item
								className={classes.link}
							>
								Contact Us
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Hidden>
			<img
				alt="black decoration slash"
				src={footerAdornment}
				className={classes.adornment}
			/>

			<Grid
				container
				justifyContent="flex-end"
				spacing={2}
				className={classes.socialContainer}
			>
				<Grid
					item
					component={'a'}
					href="https://www.facebook.com"
					rel="noopener noreferrer"
					target="_blank"
				>
					<img alt="Facebook logo" src={facebook} className={classes.icon} />
				</Grid>
				<Grid
					item
					component={'a'}
					href="https://www.twitter.com"
					rel="noopener noreferrer"
					target="_blank"
				>
					<img alt="Twitter logo" src={twitter} className={classes.icon} />
				</Grid>
				<Grid
					item
					component={'a'}
					href="https://www.instagram.com"
					rel="noopener noreferrer"
					target="_blank"
				>
					<img alt="Instagram logo" src={instagram} className={classes.icon} />
				</Grid>
			</Grid>
		</footer>
	);
}
