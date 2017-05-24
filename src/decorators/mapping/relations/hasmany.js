// usage: class Client { @hasMany(Bill) bills; ...}
import { setMeta } from 'walas-meta-api';
import { check } from '../../utils';
export const HasMany = function (...params) {
    return function (target, key, descriptor) {
        check.onlyOnProperties(descriptor, 'hasMany');
        setMeta(target, `properties.${key}.hasMany`, params[0]);
    };
}