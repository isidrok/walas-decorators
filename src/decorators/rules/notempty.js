//usage: @NotEmpty() id;
import { setMeta } from '../api';
import { onlyOnProperties } from '../utils';

export const NotEmpty = function(...params) {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'NotEmpty');
        setMeta(target, `properties.${key}.NotEmpty`, 'true');
    };
}