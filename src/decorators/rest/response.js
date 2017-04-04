//usage: @response('200', 'OK') searchClientById(id){...}
import { setMeta } from 'walas-meta-api';
import { onlyOnMethods } from '../utils';
export const response = function(...params) {
    return function(target, key, descriptor) {
        onlyOnMethods(descriptor, 'response');
        setMeta(target, `methods.${key}.response.${params[0]}`, params[1]);
    };
}