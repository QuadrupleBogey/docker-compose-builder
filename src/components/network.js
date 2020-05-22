import React from 'react';

import { TextField } from '@material-ui/core';

const Network = (props) => (
    <TextField
        id="Network"
        label="Network"
        value={props.currentValue}
        onChange={props.handleChange("network")}
        margin="normal"
    />
)

export default Network;