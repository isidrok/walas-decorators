/**
 * Specifies the length (minValue, maxValue) of a property.
 */
import { setMeta } from 'walas-meta-api';
import { getSource, validateSource } from '../utils';

//TODO se le puede pasar dos parametros
export const length = function(...params) {
    return function(target, key, descriptor) {
        let source = getSource(descriptor);
        validateSource(source, `@length can only be used on methods`, 'property');
        setMeta(target, `properties.${key}.length`, params[0]);
    };
}