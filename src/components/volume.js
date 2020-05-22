import React from 'react';

import { TextField, IconButton } from '@material-ui/core';
import Add from '@material-ui/icons/Add'

const Volume = (props) => {
    console.log(props)
    return (
        <form noValidate autoComplete="off">
            {props.currentValue.map((item, index) => { console.log(`item ${item}`, `index ${index}`); return (
                <TextField
                    key={index}
                    id="Volume"
                    label="Volume"
                    value={item}
                    onChange={(event) => props.handleChange("volume", index)}
                    margin="normal"
                />
            )})}
            <IconButton onClick={() => props.addElement("volumes", "")}>
                <Add />
            </IconButton>
        </form>
    )
}

export default Volume;