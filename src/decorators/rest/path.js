//usage: @Path('/clients') class Client {...}
import { setMeta } from 'walas-meta-api';
import { check } from '../utils';
export const Path = function(...params) {
    return function(target, key, descriptor) {
        check.onlyOnClasses(descriptor, 'Path')
        setMeta(target, 'class.path', params[0])
    };
}