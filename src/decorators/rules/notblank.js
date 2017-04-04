//usage: @notBlank() password;
import { setMeta } from '../api';
import { onlyOnProperties } from '../utils';

export const notBlank = function(...params) {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'notBlank');
        setMeta(target, `properties.${key}.notBlank`, 'true');
    };
}