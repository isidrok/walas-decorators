////usage: @Property({name:'dbName', type:'string', dbtype:'varchar', length:50}) surname;
import { check } from '../../utils';
import { setMeta } from 'walas-meta-api';
export const Property = function(...params) {
    return function(target, key, descriptor) {
        check.onlyOnProperties(descriptor, 'Property');
        setMeta(target, `properties.${key}.property`, params[0]);
    };
}