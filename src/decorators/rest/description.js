import { setMeta } from '../../api';
import { getSource } from '../utils';
export const description = function(...params) {
    return function(target, key, descriptor) {
        validateTarget(target);
        let source = getSource(descriptor);
        if (source === 'class')
            setMeta(target, 'description', params[0]);
        else {
            validateKey(key);
            let container = (source === 'method' ? 'methods' : 'properties');
            setMeta(target, `${container}.${key}.description`, params[0]);
        }
    };
}

function validateTarget(target) {
    if (!target) throw new Error('Target does not exist');
}

function validateKey(key) {
    if (!key) throw new Error('Key does not exist');
}