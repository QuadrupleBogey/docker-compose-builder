import React from 'react';

import { TextField } from '@material-ui/core';

const Service = (props) => (
    <TextField
        id="Service"
        label="Service"
        value={props.currentValue}
        onChange={props.handleChange("service")}
        margin="normal"
    />
)

export default Service;