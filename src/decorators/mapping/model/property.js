////usage: @Property({name:'dbName', type:'string', dbtype:'varchar', length:50}) surname;
import { onlyOnProperties } from '../../utils';
import { setMeta } from '../../api';
export const Property = function(...params) {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'Property');
        setMeta(target, `properties.${key}.Property`, params[0]);
    };
}