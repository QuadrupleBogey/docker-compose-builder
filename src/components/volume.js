import React from 'react';

import { TextField, IconButton } from '@material-ui/core';
import Clear from '@material-ui/icons/Clear';

const Volume = (props) => (
    <form noValidate autoComplete="off">
        <TextField
            id="Volume-external"
            label="Local Location"
            value={props.param1}
            onChange={props.updateParam1}
            margin="normal"
        />
        <TextField
            id="Volume-internal"
            label="Container location"
            value={props.param2}
            onChange={props.updateParam2}
            margin="normal"
        />
        <IconButton onClick={() => props.removeElement("volumes", props.index)}>
            <Clear />
        </IconButton>
    </form>
);

export default Volume;