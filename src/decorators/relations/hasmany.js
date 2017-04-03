// usage: class Client { @hasMany(Bill) bills; ...}
import { setMeta } from 'walas-meta-api';
import { onlyOnProperties } from '../utils';
export const hasMany = function (...params) {
    return function (target, key, descriptor) {
        onlyOnProperties(descriptor, 'hasMany');
        setMeta(target, `properties.${key}.hasMany`, params[0]);
    };
}