//usage: @Responses( {'200':'Ok','400':'Error'}) searchClientById(id){...}
import { setMeta } from 'walas-meta-api';
import { check } from '../utils';
export const Responses = function (...params) {
    return function (target, key, descriptor) {
        check.onlyOnMethods(descriptor, 'Responses');
        Object.keys(params[0]).forEach(response => {
            setMeta(target, `methods.${key}.responses.${response}`, params[0][response]);
        });
    };
}