//usage: @Provider('example') class Client{...}
import { check } from '../../utils';
import { setMeta } from 'walas-meta-api';
export const Provider = function(...params) {
    return function(target, key, descriptor) {
        check.onlyOnClasses(descriptor, 'Provider');
        setMeta(target, 'class.entity.provider', params[0]);
    };
}