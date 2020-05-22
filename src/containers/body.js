import React from 'react';

import { Button, Card, CardActions, CardContent, IconButton, Typography } from '@material-ui/core';
import Add from '@material-ui/icons/Add';

import Network from '../components/network';
import Service from '../components/service';
import Volume from '../components/volume';

import ComposeBuilder from '../utils/ComposeBuilder';

export default class Body extends React.Component {

    state = {
        services: {},
        volumes: [],
        network: {},
        param1: [],
        param2: []
    }

    addElement = (property, element) => {
        const temp = this.state[property];

        switch (property) {
            case "volumes":
                temp.push(element);
                break;
            default:
                console.log("How you get here?")
        }

        this.setState({
            [property]: temp
        });
    }

    removeElement = (property, element) => {
        const temp = this.state[property];

        switch (property) {
            case "volumes":
                temp.splice(element, 1);
                break;
            default:
                console.log("stop trying to delete something that doesn't exist")
        }

        this.setState({
            [property]: temp
        });
    }

    updateVolumes = (param1, param2, index) => {
        const temp = this.state.volumes;
        temp[index] = `${param1}:${param2}`
        this.setState({
            volumes: temp
        });
    }

    createYamlFile = () => {
        const volumes = this.state.volumes;
        const p1 = this.state.param1;
        const p2 = this.state.param2;

        for (let i = 0; i < volumes.length; i++) {
            volumes[i] = `${p1[i]}:${p2[i]}`;
        }

        const builder = new ComposeBuilder();
        builder.download({
            'version': this.props.version,
            'services': this.state.services,
            'volumes': volumes,
            'network': this.state.network
        });
    }

    reset = () => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Are you sure you want to clear this configuration?')) {
            this.setState({
                services: {},
                volumes: [],
                network: {}
            });
        }
    }

    render() {
        return (
            <Card>
                <CardContent>
                    <Typography>Add Services</Typography>
                    <Service
                        currentValue={this.state.services}
                        handleChange={(data) => {
                            this.setState({
                                services: data
                            });
                        }} 
                    />
                    <Typography>Define Volumes</Typography>
                    {this.state.volumes.map((item, index) => (
                        <Volume
                            key={`volume-${index}`}
                            index={index}
                            param1={this.state.param1[index]}
                            param2={this.state.param2[index]}
                            updateParam1={(event) => {
                                const temp = this.state.param1;
                                temp[index] = event.target.value;
                                this.setState({
                                    param1: temp
                                });
                            }}
                            updateParam2={(event) => {
                                const temp = this.state.param2;
                                temp[index] = event.target.value;
                                this.setState({
                                    param2: temp
                                });
                            }}
                            removeElement={this.removeElement}
                        />
                    ))}
                    <IconButton onClick={() => this.addElement("volumes", "")}>
                        <Add />
                    </IconButton>
                    <Typography>Define Networks</Typography>
                    <Network currentValue={this.state.network} handleChange={() => { }} />
                </CardContent>

                <CardActions>
                    <Button color="primary" onClick={this.createYamlFile}>Create</Button>
                    <Button color="secondary" onClick={this.reset}>Reset</Button>
                </CardActions>
            </Card>
        )
    }


}