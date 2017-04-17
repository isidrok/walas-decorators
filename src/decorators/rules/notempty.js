//usage: @NotEmpty() id;
import { setMeta } from 'walas-meta-api';
import { onlyOnProperties } from '../utils';

export const NotEmpty = function() {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'NotEmpty');
        setMeta(target, `properties.${key}.notEmpty`, true);
    };
}