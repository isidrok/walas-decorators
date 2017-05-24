//usage: @Response('200', 'OK') searchClientById(id){...}
import { setMeta } from 'walas-meta-api';
import { check } from '../utils';
export const Response = function(...params) {
    return function(target, key, descriptor) {
        check.onlyOnMethods(descriptor, 'Response');
        setMeta(target, `methods.${key}.responses.${params[0]}`, params[1]);
    };
}