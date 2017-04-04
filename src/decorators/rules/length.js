//usage: @Length(65) name;
//we assume it is the longest Length
import { setMeta } from '../api';
import { onlyOnProperties } from '../utils';

export const Length = function(...params) {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'Length');
        setMeta(target, `properties.${key}.Length`, params[0]);
    };
}