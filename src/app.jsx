import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class App extends React.Component {
	render() {
		const {classes} = this.props;

		return (
			<AppBar
				position="static">
				<Toolbar>
					<Typography
						variant="h6"
						color="inherit"
						className={classes.grow}>
						Hello World
					</Typography>
				</Toolbar>
			</AppBar>
		);
	}
}

const styles = theme => ({
	grow: {
		flexGrow: 1
	}
});

export default withStyles(styles)(App);
