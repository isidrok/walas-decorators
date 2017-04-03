import { setMeta } from 'walas-meta-api';
import { getSource, validateArgs } from '../utils';
export const description = function (...params) {
    return function (target, key, descriptor) {
        validateArgs('Target does not exist', target);
        let source = getSource(descriptor);
        if (source === 'class')
            setMeta(target, 'description', params[0]);
        else {
            validateArgs('Key does not exist', key);
            let container = (source === 'method' ? 'methods' : 'properties');
            setMeta(target, `${container}.${key}.description`, params[0]);
        }
    };
}

