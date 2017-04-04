//usage: @max(50) password;
import { setMeta } from 'walas-meta-api';
import { onlyOnProperties } from '../utils';

export const max = function(...params) {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'max');
        setMeta(target, `properties.${key}.max`, params[0]);
    };
}