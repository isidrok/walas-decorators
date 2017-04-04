//usage: @future() date;
import { setMeta } from 'walas-meta-api';
import { onlyOnProperties } from '../utils';

export const future = function(...params) {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'future');
        setMeta(target, `properties.${key}.future`, 'true');
    };
}