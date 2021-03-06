//usage: @DeleteColumn('columnName')
/**
 * @export
 * @example @DeleteColumn('columnName')
 */
import { onlyOnClasses } from '../../utils';
import { setMeta } from 'walas-meta-api';
export const DeleteColumn = function(...params) {
    return function(target, key, descriptor) {
        onlyOnClasses(descriptor, 'DeleteColumn');
        setMeta(target, 'class.generators.deleteColumn', params[0]);
    };
}