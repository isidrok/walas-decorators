/**
 * Specifies that this property can not be empty.
 */
import { setMeta } from 'walas-meta-api';
import { getSource, validateSource } from '../utils';

export const notEmpty = function(...params) {
    return function(target, key, descriptor) {
        let source = getSource(descriptor);
        validateSource(source, `@notEmpty can only be used on methods`, 'property');
        setMeta(target, `properties.${key}.notEmpty`, 'true');
    };
}