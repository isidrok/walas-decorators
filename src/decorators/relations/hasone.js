// usage: class Bill { @hasOne(Client) client; ...}
import { setMeta } from 'walas-meta-api';
import { onlyOnProperties } from '../utils';
export const hasOne = function (...params) {
    return function (target, key, descriptor) {
        onlyOnProperties(descriptor, 'hasOne');
        setMeta(target, `properties.${key}.hasOne`, params[0]);
    };
}