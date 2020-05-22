import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Checkbox, FormControl, FormLabel, FormControlLabel, FormGroup, IconButton, TextField } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import Clear from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
}));

const Service = (props) => {

    const classes = useStyles();

    const [state, setState] = React.useState({
        context: false,
        dockerfile: false,
        dockerFile: "",
        conText: "",
        image: "",
        args: [],
        args1: [],
        args2: [],
        ports: [],
        port1: [],
        port2: [],
        name: '',
        depends_on: []
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const addElement = (property, value) => {
        const temp = state[property];
        switch (property) {
            case "args":
            case "ports":
            case "depends_on":
                temp.push(value);
                break;
            default:
                console.log("Hmmm, this doesn't seem right")
        }

        console.log(state, temp);
        setState({
            ...state,
            [property]: temp
        });
    };

    const addElements = (property, value) => event => {
        const temp = state[property];
        temp[value] = event.target.value;
        setState({ ...state, [property]: temp });
    }

    const removeElement = (property, value) => {
        const temp = state[property];
        switch (property) {
            case "args":
            case "depends_on":
            case "ports":
                temp.splice(value, 1);
                break;
            default:
                console.log("Hmmm, this doesn't seem right")
        }
        setState({
            ...state,
            [property]: temp
        });
    }

    console.log(state);

    return (
        <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Additional Parameters</FormLabel>
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox checked={state.context} onChange={handleChange} name="context" />}
                    label="Build"
                />
                <FormControlLabel
                    control={<Checkbox checked={state.dockerfile} onChange={handleChange} name="dockerfile" />}
                    label="dockerfile"
                />
                {state.context ?
                    <TextField
                        id="build-context"
                        label="Build Context"
                        value={state.conText}
                        onChange={(event) => setState({ ...state, conText: event.target.value })}
                        margin="normal"
                    />
                    :
                    null
                }
                {state.dockerfile ?
                    <TextField
                        id="dockerfile"
                        label="Dockerfile"
                        value={state.dockerFile}
                        onChange={(event) => setState({ ...state, dockerFile: event.target.value })}
                        margin="normal"
                    /> :
                    null
                }
                <TextField
                    id="image"
                    label="Image"
                    value={state.image}
                    onChange={(event) => setState({ ...state, image: event.target.value })}
                    margin="normal"
                />
            </FormGroup>
            {state.args.map((item, index) => (
                <div>
                    <TextField
                        id="Volume-external"
                        label="Argument parament"
                        value={state.argsP1[index]}
                        onChange={() => addElements("argsP1", index)}
                        margin="normal"
                    />
                    <TextField
                        id="Volume-internal"
                        label="Argument value"
                        value={state.argsP2[index]}
                        onChange={() => addElements("argsP2", index)}
                        margin="normal"
                    />
                    <IconButton onClick={() => removeElement("args", index)}>
                        <Clear />
                    </IconButton>
                </div>
            ))}
            <IconButton onClick={() => addElement("args", "")}>
                <Add />
            </IconButton>
            {state.ports.map((item, index) => (
                <div key={index}>
                    <TextField
                        id="port-external"
                        label="Host Port to expose"
                        value={state.ports1[index]}
                        onChange={() => addElements("ports1", index)}
                        margin="normal"
                    />
                    <TextField
                        id="port-internal"
                        label="Container Port to expose"
                        value={state.ports2[index]}
                        onChange={() => addElements("ports2", index)}
                        margin="normal"
                    />
                    <IconButton onClick={() => removeElement("ports", index)}>
                        <Clear />
                    </IconButton>
                </div>
            ))}
            <IconButton onClick={() => addElement("ports", "")}>
                <Add />
            </IconButton>
            <TextField
                id="name"
                label="Container Name"
                value={state.name}
                onChange={(event) => setState({ ...state, name: event.target.value })}
                margin="normal"
            />
            {state.depends_on.map((item, index) => (
                <div key={index}>
                    <TextField
                        id="port-external"
                        label="Depends on"
                        value={state.depends_on[index]}
                        onChange={() => addElements("depends_on", index)}
                        margin="normal"
                    />
                    <IconButton onClick={() => removeElement("depends_on", index)}>
                        <Clear />
                    </IconButton>
                </div>
            ))}
            <IconButton onClick={() => addElement("depends_on", "")}>
                <Add />
            </IconButton>
        </FormControl>
    )
}

export default Service;