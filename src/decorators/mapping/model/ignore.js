//usage: @Ignore() password;
import { check } from '../../utils';
import { setMeta } from 'walas-meta-api';
export const Ignore = function() {
    return function(target, key, descriptor) {
        check.onlyOnProperties(descriptor, 'Ignore');
        setMeta(target, `properties.${key}.ignore`, true);
    };
}