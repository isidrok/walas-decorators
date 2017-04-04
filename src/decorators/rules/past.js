//usage: @Past() date;
import { setMeta } from '../api';
import { onlyOnProperties } from '../utils';

export const Past = function(...params) {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'Past');
        setMeta(target, `properties.${key}.Past`, 'true');
    };
}