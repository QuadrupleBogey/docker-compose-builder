import React from 'react';

import { TextField } from '@material-ui/core';

const Network = (props) => (
    <form noValidate autoComplete="off">
        <TextField
            id="Network"
            label="Network"
            value={props.currentValue}
            onChange={props.handleChange("network")}
            margin="normal"
        />
    </form>
)

export default Network;