import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography,
} from '@material-ui/core';

import Version from '../components/version';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};


class Header extends React.Component {
    state = {
        anchorEl: null,
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        // console.log(this.props);
        const open = Boolean(this.state.anchorEl);

        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" color="inherit" className={this.props.classes.flex}>
                        Docker Compose Builder
              </Typography>
                    <Version 
                     anchorEl={this.state.anchorEl}
                     open={open}
                     handleChange={this.props.handleChange} 
                     handleClose={this.handleClose}
                     handleMenu={this.handleMenu}
                     versionArray={this.props.version}
                     versionIndex={this.props.index}
                    />
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(Header);