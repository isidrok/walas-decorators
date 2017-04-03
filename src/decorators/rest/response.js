import { setMeta } from 'walas-meta-api';
import { getSource, validateArgs, validateSource } from '../utils';
export const response = function(...params) {
    return function(target, key, descriptor) {
        validateArgs(null, target, key, descriptor);
        let source = getSource(descriptor);
        validateSource(source, '@response can only be used on methods', 'method')
        setMeta(target, `methods.${key}.response`, params[0])
    };
}