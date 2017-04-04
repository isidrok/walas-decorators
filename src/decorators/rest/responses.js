//usage: @Responses( {'200':'Ok','400':'Error'}) searchClientById(id){...}
import { setMeta } from '../api';
import { onlyOnMethods } from '../utils';
export const Responses = function(...params) {
    return function(target, key, descriptor) {
        onlyOnMethods(descriptor, 'Responses');
        setMeta(target, `methods.${key}.Responses`, params[0]);
    };
}