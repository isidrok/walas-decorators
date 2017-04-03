//usage: @id() dni;
import { notOnMethods } from '../utils';
import { setMeta } from 'walas-meta-api';
export const id = function (...params) {
    return function (target, key, descriptor) {
        notOnMethods(descriptor, 'id');
        let value = params || true;
        setMeta(target, `ids.${key}`, value);
        //TODO: maybe ids should be an array

    };
}