// usage: class Client { @hasMany(Bill) bill; ...}
import { setMeta } from 'walas-meta-api';
import { getSource } from '../utils';
export const hasMany = function (...params) {
    return function (target, key, descriptor) {
        if(getSource(descriptor) != 'property')
            throw new SyntaxError('@hasMany can only be used on properties');
        setMeta(target, `properties.${key}.hasMany`, params[0]);
    };
}