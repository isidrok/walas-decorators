//usage: @Validate() id;
import { setMeta } from '../api';
import { onlyOnMethods } from '../utils';

export const Validate = function(...params) {
    return function(target, key, descriptor) {
        onlyOnMethods(descriptor, 'Validate');
        setMeta(target, `methods.${key}.Validate`, 'true');
    };
}