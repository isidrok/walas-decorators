////usage: @property({name:'dbName', type:'string', dbtype:'varchar', length:50}) surname;
import { onlyOnProperties } from '../../utils';
import { setMeta } from '../../api';
export const property = function (...params) {
    return function (target, key, descriptor) {
        onlyOnProperties(descriptor, 'property');
        setMeta(target, `properties.${key}.property`, params[0]);
    };
}