//usage: @min(20) name;
import { setMeta } from '../api';
import { onlyOnProperties } from '../utils';

export const min = function(...params) {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'min');
        setMeta(target, `properties.${key}.min`, params[0]);
    };
}