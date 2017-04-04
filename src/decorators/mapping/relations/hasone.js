// usage: class Bill { @hasOne(Client) client; ...}
import { setMeta } from '../../api';
import { onlyOnProperties } from '../../utils';
export const HasOne = function (...params) {
    return function (target, key, descriptor) {
        onlyOnProperties(descriptor, 'hasOne');
        setMeta(target, `properties.${key}.hasOne`, params[0]);
    };
}