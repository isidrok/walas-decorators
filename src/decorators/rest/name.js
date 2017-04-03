import { setMeta } from 'walas-meta-api';
import { getSource, validateSource, validateArgs } from '../utils';
export const name = function(...params) {
    return function(target, key, descriptor) {
        validateArgs(null, target, key, descriptor);
        let source = getSource(descriptor);
        validateSource(source, `@name can only be used on properties`, 'property');
        setMeta(target, `properties.${key}.name`, params[0]);
    };
}