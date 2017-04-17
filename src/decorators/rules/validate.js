//usage: @Validate() id;
import { setMeta } from 'walas-meta-api';
import { onlyOnMethods } from '../utils';
export const Validate = function() {
    return function(target, key, descriptor) {
        onlyOnMethods(descriptor, 'Validate');
        setMeta(target, `methods.${key}.validate`, true);
    };
}