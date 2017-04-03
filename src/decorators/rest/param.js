import { setMeta } from 'walas-meta-api';
import { getSource, validateSource, validateArgs } from '../utils';
export const param = function(...params) {
    return function(target, key, descriptor) {
        validateArgs(null, target, key, descriptor);
        let source = getSource(descriptor);
        validateSource(source, `@param can only be used on methods`, 'method');
        setMeta(target, `methods.${key}.param`, params[0]);
    };
}