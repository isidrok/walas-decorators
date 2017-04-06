import { ConventionBase } from '../../conventionbase';
import { getMeta } from '../../../api';

export class ConventionString extends ConventionBase {
    constructor(entity, meta) {
        super(entity, meta);
    }
   
    get properties() {
        return 'properties';
    }
    exec() {
        let properties = getMeta(this._meta, this.properties);
        Object.keys(properties).forEach(prop =>{
            if(properties[prop].type === 'string')
                properties[prop].length = properties[prop].length || 50;
        });
    }
}
