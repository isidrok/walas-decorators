//usage: @NotNull() id;
import { setMeta } from '../api';
import { onlyOnProperties } from '../utils';

export const NotNull = function(...params) {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'NotNull');
        setMeta(target, `properties.${key}.NotNull`, 'true');
    };
}