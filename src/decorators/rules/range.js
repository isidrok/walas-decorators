//usage: @range({min:15,max:70}) username;
import { setMeta } from '../api';
import { onlyOnProperties } from '../utils';

export const range = function(...params) {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'range');
        setMeta(target, `properties.${key}.range`, params[0]);
    };
}