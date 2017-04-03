import { setMeta } from 'walas-meta-api';
import { getSource, validateSource, validateArgs } from '../utils';
export const type = function(...params) {
    return function(target, key, descriptor) {
        validateArgs(null, target, key, descriptor);
        let source = getSource(descriptor);
        validateSource(source, `@type can only be used on properties`, 'property');
        setMeta(target, `properties.${key}.type`, params[0]);
    };
}