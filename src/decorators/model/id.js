//usage: @id() dni;
import { onlyOnProperties } from '../utils';
import { setMeta } from 'walas-meta-api';
export const id = function () {
    return function (target, key, descriptor) {
        onlyOnProperties(descriptor, 'id');
        setMeta(target, `ids.${key}`, true);
        //TODO: maybe ids should be an array

    };
}