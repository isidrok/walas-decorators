//usage: @notEmpty() id;
import { setMeta } from 'walas-meta-api';
import { onlyOnProperties } from '../utils';

export const notEmpty = function(...params) {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'notEmpty');
        setMeta(target, `properties.${key}.notEmpty`, 'true');
    };
}