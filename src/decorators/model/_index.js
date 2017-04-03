//usage: @index(index1, {field: _field, order: _order}) class Client{...}
import { onlyOnClasses } from '../utils';
import { setMeta } from 'walas-meta-api';
export const index = function (...params) {
    return function (target, key, descriptor) {
        onlyOnClasses(descriptor, 'index');
        setMeta(target, `indexes.${params[0]}`, params[1]);
    };
}