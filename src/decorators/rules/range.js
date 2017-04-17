//usage: @Range({min:15,max:70}) username;
import { setMeta } from 'walas-meta-api';
import { onlyOnProperties } from '../utils';

export const Range = function(...params) {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'Range');
        setMeta(target, `properties.${key}.range`, params[0]);
    };
}