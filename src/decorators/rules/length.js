//usage: @length(65) name;
//we assume it is the longest length
import { setMeta } from 'walas-meta-api';
import { onlyOnProperties } from '../utils';

export const length = function(...params) {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'length');
        setMeta(target, `properties.${key}.length`, params[0]);
    };
}