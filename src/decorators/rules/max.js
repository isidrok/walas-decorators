/**
 * Specifies the maximum length of a property.
 */
import { setMeta } from 'walas-meta-api';
import { getSource, validateSource } from '../utils';

export const max = function(...params) {
    return function(target, key, descriptor) {
        let source = getSource(descriptor);
        validateSource(source, `@max can only be used on methods`, 'property');
        setMeta(target, `properties.${key}.max`, params[0]);
    };
}