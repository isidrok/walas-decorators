//usage: @Provider('example') class Client{...}
import { onlyOnClasses } from '../../utils';
import { setMeta } from 'walas-meta-api';
export const Provider = function(...params) {
    return function(target, key, descriptor) {
        onlyOnClasses(descriptor, 'Provider');
        //classes + properties?
        setMeta(target, 'class.provider', params[0]);
    };
}