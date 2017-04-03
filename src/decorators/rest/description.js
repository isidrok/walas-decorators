// Specifies the description of
// a class, method or property.
import { setMeta } from 'walas-meta-api';
import { getSource } from '../utils';
export const description = function (...params) {
    return function (target, key, descriptor) {
        let source = getSource(descriptor);
        let container = (source === 'method' ? 'methods' : 'properties');
        key = source === 'class' ? 'description' : `${container}.${key}.description`;
        setMeta(target, key, params[0]);
    }
};
