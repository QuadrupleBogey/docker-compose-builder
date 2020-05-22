import fileDownload from 'js-file-download';
import yaml from 'js-yaml';

export default class ComposeBuilder {

    data = {}

    download = data => {
        this.checkValues(data);
        fileDownload(yaml.dump(this.data), 'docker-compose.yml');
    }

    checkValues = data => {
        if(data.version !== null) {
            this.data['version'] = data.version;
        }
        if(data.volumes.length !== 0) {
            this.data['volumes'] = data.volumes;
        }
        if(Object.keys(data.services).length !== 0) {
            this.data['services'] = data.services;
        }
        if(Object.keys(data.network).length !== 0) {
            this.data['network'] = data.services;
        }
    }
} 