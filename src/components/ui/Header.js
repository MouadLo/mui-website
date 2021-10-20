import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Slide } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

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
export default function Header(props) {
	return (
		<React.Fragment>
			<ElevationScroll {...props}>
				<AppBar position="fixed">
					<Toolbar>Leaf Developement</Toolbar>
				</AppBar>
			</ElevationScroll>
		</React.Fragment>
	);
}
