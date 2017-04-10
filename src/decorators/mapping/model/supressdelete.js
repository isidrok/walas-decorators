//usage: @SupressDelete()
import { onlyOnClasses } from '../../utils';
import { setMeta } from '../../../api';
export const SupressDelete = function(...params) {
    return function(target, key, descriptor) {
        onlyOnClasses(descriptor, 'SupressDelete');
        setMeta(target, 'class.generators.supressDelete', true);
    };
}