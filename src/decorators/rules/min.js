/**
 * Specifies the minimum length of a property.
 */
import { setMeta } from 'walas-meta-api';
import { getSource, validateSource } from '../utils';

export const min = function(...params) {
    return function(target, key, descriptor) {
        let source = getSource(descriptor);
        validateSource(source, `@min can only be used on methods`, 'property');
        setMeta(target, `properties.${key}.min`, params[0]);
    };
}