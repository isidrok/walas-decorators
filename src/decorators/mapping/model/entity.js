//usage: @entity({schema: 'Schema', table:'CLIENT', provider:'mysql'}) class Client{...}
import { onlyOnClasses } from '../../utils';
import { setMeta } from '../../../api';
export const entity = function (...params) {
    return function (target, key, descriptor) {
        onlyOnClasses(descriptor, 'entity');
        setMeta(target, 'class.entity', params[0]);
    };
}

