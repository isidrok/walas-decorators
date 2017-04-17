import { ConventionBase } from '../../conventionbase';
import { getMeta } from 'walas-meta-api';

/**
 * If the type of a property is 'decimal' then by default
 * the scale will be set to 10 and the precission to 2
 * @export
 * @class ConventionDecimal
 * @extends {ConventionBase}
 */
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
            let props = properties[prop].property;
            if (!props) return;
            if (props.type === 'decimal') {
                props.scale = props.scale || 10;
                props.precission = props.precission || 2;

            }
        });
    }
}
