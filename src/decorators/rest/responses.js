import { setMeta } from 'walas-meta-api';
import { getSource, validateSource, validateArgs } from '../utils';
export const responses = function(...params) {
    return function(target, key, descriptor) {
        validateArgs(null, target, key, descriptor);
        let source = getSource(descriptor);
        validateSource(source, `@responses can only be used on methods`, 'method');
        setMeta(target, `methods.${key}.responses`, params);
    };
}