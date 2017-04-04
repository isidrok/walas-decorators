//usage: @Max(50) password;
import { setMeta } from '../api';
import { onlyOnProperties } from '../utils';

export const Max = function(...params) {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'Max');
        setMeta(target, `properties.${key}.max`, params[0]);
    };
}