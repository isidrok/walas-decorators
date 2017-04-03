/**
 * Specifies that this property can not be blank.
 */
import { setMeta } from 'walas-meta-api';
import { getSource, validateSource } from '../utils';

export const notBlank = function(...params) {
    return function(target, key, descriptor) {
        let source = getSource(descriptor);
        validateSource(source, `@notBlank can only be used on methods`, 'property');
        setMeta(target, `properties.${key}.notBlank`, 'true');
    };
}