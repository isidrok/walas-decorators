//usage: @index({index1:{field: _field, order: _order}},{index2:{field: _field, order: _order}}) class Client{...}
import { check } from '../../utils';
import { setMeta } from 'walas-meta-api';
export const Index = function (...params) {
    return function (target, key, descriptor) {
        check.onlyOnClasses(descriptor, 'index');
        setMeta(target, `class.index`, params[0]);
    };
}