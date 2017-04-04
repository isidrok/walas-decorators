//usage: @Response('200', 'OK') searchClientById(id){...}
import { setMeta } from '../api';
import { onlyOnMethods } from '../utils';
export const Response = function(...params) {
    return function(target, key, descriptor) {
        onlyOnMethods(descriptor, 'Response');
        setMeta(target, `methods.${key}.Responses.${params[0]}`, params[1]);
    };
}