//usage: @SupressDelete()
/**
 * @export
 * @example @SupressDelete()
 */
import { onlyOnClasses } from '../../utils';
import { setMeta } from 'walas-meta-api';
export const SupressDelete = function(...params) {
    return function(target, key, descriptor) {
        onlyOnClasses(descriptor, 'SupressDelete');
        setMeta(target, 'class.generators.supressDelete', true);
    };
}