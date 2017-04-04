//usage: @Provider('example') class Client{...}
import { onlyOnClasses } from '../../utils';
import { setMeta } from '../../../api';
export const Provider = function(...params) {
    return function(target, key, descriptor) {
        onlyOnClasses(descriptor, 'Provider');
        setMeta(target, 'class.Provider', params[0]);
    };
}