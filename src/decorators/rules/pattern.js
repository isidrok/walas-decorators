//usage: @Pattern('id%',null) id;
//usage: @Pattern('$%&','') name;
import { setMeta } from 'walas-meta-api';
import { onlyOnProperties } from '../utils';

export const Pattern = function(...params) {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'Pattern');
        setMeta(target, `properties.${key}.pattern`, params);
    };
}