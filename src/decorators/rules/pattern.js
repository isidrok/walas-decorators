//usage: @Pattern('id%',null) id;
//usage: @Pattern('$%&','') name;
import { setMeta } from '../api';
import { onlyOnProperties } from '../utils';

export const Pattern = function(...params) {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'Pattern');
        setMeta(target, `properties.${key}.Pattern`, params);
    };
}