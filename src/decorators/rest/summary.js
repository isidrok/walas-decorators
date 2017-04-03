/**
 * Specifies the summary of a method.
 */
import { setMeta } from 'walas-meta-api';
import { getSource, validateSource, validateArgs } from '../utils';

export const summary = function(...params) {
    return function(target, key, descriptor) {
        validateArgs(null, target, key, descriptor);
        let source = getSource(descriptor);
        validateSource(source, `@summary can only be used on methods`, 'method');
        setMeta(target, `methods.${key}.summary`, params[0]);
    };
}