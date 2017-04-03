////usage: @property({name:'dbName', type:'varchar', length:50}) surname;
import { onlyOnProperties } from '../utils';
import { setMeta } from 'walas-meta-api';
export const property = function (...params) {
    return function (target, key, descriptor) {
        onlyOnProperties(descriptor, 'property');
        setMeta(target, `properties.${key}.property`, params[0]);
    };
}