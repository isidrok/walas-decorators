// usage: class Bill { @hasOne(Client) client; ...}
import { setMeta } from 'walas-meta-api';
import { getSource } from '../utils';
export const hasOne = function (...params) {
    return function (target, key, descriptor) {
        if(getSource(descriptor) != 'property')
            throw new SyntaxError('@hasOne can only be used on properties');
        setMeta(target, `properties.${key}.hasOne`, params[0]);
    };
}