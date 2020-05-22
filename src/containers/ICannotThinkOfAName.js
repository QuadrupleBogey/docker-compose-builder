import React from 'react';

import { Button, Card, CardActions, CardContent } from '@material-ui/core';

import Network from '../components/network';
import Service from '../components/service';
import Volume from '../components/volume';

import ComposeBuilder from '../utils/ComposeBuilder';

export default class ICannotThinkOfAName extends React.Component {

    state = {
        version: '3.8',
        services: {},
        volumes: ["", "", ""],
        network: {}
    }

    handleChange = (name, index) => event => {
        console.log(name, index, event.target.value);
        switch (name) {
            case 'volumes':
                const changes = this.state.volumes;
                changes[index] = event.target.value;
                this.setState({
                    volumes: changes
                });
                break;
            default:
                console.log("Couldn't find item");
        }
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

    createYamlFile = () => {
        const builder = new ComposeBuilder();
        builder.download(this.state);
    }

    reset = () => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Are you sure you want to clear this configuration?')) {
            this.setState({
                version: '3.8',
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
                    <Service currentValue={this.state.services} handleChange={this.handleChange} />
                    <Volume
                        currentValue={this.state.volumes}
                        handleChange={this.handleChange}
                        addElement={this.addElement}
                    />
                    <Network currentValue={this.state.network} handleChange={this.handleChange} />
                </CardContent>

                <CardActions>
                    <Button color="primary" onClick={this.createYamlFile}>Create</Button>
                    <Button color="secondary" onClick={this.reset}>Reset</Button>
                </CardActions>
            </Card>
        )
    }


}