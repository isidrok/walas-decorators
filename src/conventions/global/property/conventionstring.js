import { ConventionBase } from '../../conventionbase';
import { getMeta } from 'walas-meta-api';

/**
 * If a property is of type 'string' then
 * its default length is 50
 * @export
 * @class ConventionString
 * @extends {ConventionBase}
 */
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
            let props = properties[prop].property;
            if(!props) return;
            if(props.type === 'string')
               props.length = props.length || 50;
        });
    }
}
