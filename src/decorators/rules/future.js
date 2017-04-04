//usage: @Future() date;
import { setMeta } from '../api';
import { onlyOnProperties } from '../utils';

export const Future = function(...params) {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'Future');
        setMeta(target, `properties.${key}.Future`, 'true');
    };
}