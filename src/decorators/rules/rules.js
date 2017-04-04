//usage: @rules(required,[max,50],notBlank) email;
import { setMeta } from '../api';
import { onlyOnProperties } from '../utils';

export const rules = function(...params) {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'rules');
        setMeta(target, `properties.${key}.rules`, params);
    };
}