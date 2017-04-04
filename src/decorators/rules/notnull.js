//usage: @notNull() id;
import { setMeta } from '../api';
import { onlyOnProperties } from '../utils';

export const notNull = function(...params) {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'notNull');
        setMeta(target, `properties.${key}.notNull`, 'true');
    };
}