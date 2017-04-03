/**
 * Specifies that this property can not be null.
 */
import { setMeta } from 'walas-meta-api';
import { getSource, validateSource } from '../utils';

export const notNull = function(...params) {
    return function(target, key, descriptor) {
        let source = getSource(descriptor);
        validateSource(source, `@notNull can only be used on methods`, 'property');
        setMeta(target, `properties.${key}.notNull`, 'true');
    };
}