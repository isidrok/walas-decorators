//usage: @SupressGet()
import { onlyOnClasses } from '../../utils';
import { setMeta } from '../../../api';
export const SupressGet = function(...params) {
    return function(target, key, descriptor) {
        onlyOnClasses(descriptor, 'SupressGet');
        setMeta(target, 'class.generators.supressGet', true);
    };
}