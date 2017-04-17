//usage: @Length(65) name;
//we assume it is the longest Length
import { setMeta } from 'walas-meta-api';
import { onlyOnProperties } from '../utils';

export const Length = function(...params) {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'Length');
        setMeta(target, `properties.${key}.length`, params[0]);
    };
}