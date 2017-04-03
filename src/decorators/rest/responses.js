//usage: @responses( {200:'Ok',400:'Error'}) searchClientById(id){...}
import { setMeta } from 'walas-meta-api';
import { onlyOnMethods } from '../utils';
export const responses = function(...params) {
    return function(target, key, descriptor) {
        onlyOnMethods(descriptor, 'responses');
        setMeta(target, `methods.${key}.responses`, params[0]);
        //TODO: can be overwritten with @param, think better implementation
    };
}