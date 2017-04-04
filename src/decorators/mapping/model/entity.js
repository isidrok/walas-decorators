//usage: @Entity({schema: 'Schema', table:'CLIENT', provider:'mysql'}) class Client{...}
import { onlyOnClasses } from '../../utils';
import { setMeta } from '../../../api';
export const Entity = function(...params) {
    return function(target, key, descriptor) {
        onlyOnClasses(descriptor, 'Entity');
        setMeta(target, 'class.entity', params[0]);
    };
}