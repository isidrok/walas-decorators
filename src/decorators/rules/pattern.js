//usage: @pattern('id%',null) id;
//usage: @pattern('$%&','') name;
import { setMeta } from '../api';
import { onlyOnProperties } from '../utils';

export const pattern = function(...params) {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'pattern');
        setMeta(target, `properties.${key}.pattern`, params);
    };
}