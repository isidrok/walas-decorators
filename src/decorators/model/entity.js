//usage: @entity({table:'CLIENT', provider:'mysql'}) class Client{...}
import { onlyOnClasses } from '../utils';
import { setMeta } from 'walas-meta-api';
export const entity = function (...params) {
    return function (target, key, descriptor) {
        onlyOnClasses(descriptor, 'entity');
        setMeta(target, 'entity', params[0]);
    };
}

