//usage: @response('200', 'OK') searchClientById(id){...}
import { setMeta } from '../api';
import { onlyOnMethods } from '../utils';
export const response = function(...params) {
    return function(target, key, descriptor) {
        onlyOnMethods(descriptor, 'response');
        setMeta(target, `methods.${key}.responses.${params[0]}`, params[1]);
    };
}