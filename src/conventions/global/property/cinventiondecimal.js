import { ConventionBase } from '../../conventionbase';
import { getMeta } from '../../../api';

export class ConventionDecimal extends ConventionBase {
    constructor(entity, meta) {
        super(entity, meta);
    }

    get properties() {
        return 'properties';
    }
    exec() {
        let properties = getMeta(this._meta, this.properties);
        Object.keys(properties).forEach(prop => {
            if (properties[prop].type === 'decimal') {
                properties[prop].scale = properties[prop].scale || 10;
                properties[prop].precission = properties[prop].precission || 2;

            }
        });
    }
}
