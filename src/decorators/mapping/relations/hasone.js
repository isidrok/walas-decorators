// usage: class Bill { @hasOne(Client) client; ...}
import { setMeta } from 'walas-meta-api';
import { check } from '../../utils';
export const HasOne = function (...params) {
    return function (target, key, descriptor) {
        check.onlyOnProperties(descriptor, 'hasOne');
        setMeta(target, `properties.${key}.hasOne`, params[0]);
    };
}