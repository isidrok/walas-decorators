//usage: @Path('/clients') class Client {...}
import { setMeta } from '../api';
import { onlyOnClasses } from '../utils';
export const Path = function(...params) {
    return function(target, key, descriptor) {
        onlyOnClasses(descriptor, 'Path')
        setMeta(target, 'class.path', params[0])
    };
}