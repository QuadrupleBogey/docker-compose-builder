import fileDownload from 'js-file-download';
import yaml from 'js-yaml';

export default class ComposeBuilder {
    download(data) {
        fileDownload(yaml.dump(data), 'docker-compose.yml');
    }
} 