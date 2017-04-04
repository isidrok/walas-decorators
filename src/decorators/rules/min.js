//usage: @Min(20) name;
import { setMeta } from '../api';
import { onlyOnProperties } from '../utils';

export const Min = function(...params) {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'Min');
        setMeta(target, `properties.${key}.Min`, params[0]);
    };
}