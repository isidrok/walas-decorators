////usage: @property({name:'dbName', type:'varchar', length:50}) surname;
import { getSource } from '../utils';
import { setMeta } from 'walas-meta-api';
export const property = function (...params) {
    return function (target, key, descriptor) {
        if (getSource(descriptor) != 'property')
            throw new SyntaxError('@property can only be used on properties');
        setMeta(target, `properties.${key}.property`, params[0]);
    };
}