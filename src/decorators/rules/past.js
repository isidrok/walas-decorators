//usage: @past() date;
import { setMeta } from '../api';
import { onlyOnProperties } from '../utils';

export const past = function(...params) {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'past');
        setMeta(target, `properties.${key}.past`, 'true');
    };
}