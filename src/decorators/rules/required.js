/**
 * Specifies that this property is required.
 */
import { setMeta } from 'walas-meta-api';
import { getSource, validateSource } from '../utils';

export const required = function(...params) {
    return function(target, key, descriptor) {
        let source = getSource(descriptor);
        validateSource(source, `@required can only be used on methods`, 'property');
        setMeta(target, `properties.${key}.required`, 'true');
    };
}