import React from 'react';

import { Button, Menu, MenuItem } from '@material-ui/core';

const Version = (props) => {
    console.log('version', props)
    return (
        <div>
            <Button
                aria-owns={props.open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={props.handleMenu}
                color="inherit"
            >
                {`Version ${props.versionArray[props.versionIndex]}`}
            </Button>
            <Menu
                id="menu-appbar"
                anchorEl={props.anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={props.open}
                onClose={props.handleClose}
            >
                {props.versionArray.map((version, index) => (
                    // eslint-disable-next-line no-native-reassign
                    // eslint-disable-next-line no-restricted-globals
                    <MenuItem key={version} onClick={() => props.handleChange(index)}>{version}</MenuItem>
                ))}
            </Menu>
        </div>
    )
}

export default Version;