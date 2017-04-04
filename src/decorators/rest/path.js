//usage: @path('/clients') class Client {...}
import { setMeta } from 'walas-meta-api';
import { onlyOnClasses } from '../utils';
export const path = function (...params) {
    return function (target, key, descriptor) {
        onlyOnClasses(descriptor, 'path')
        setMeta(target, 'class.path', params[0])
    };
}