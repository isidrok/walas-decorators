//usage: @DeleteDate('columnName')
/**
 * @export
 * @example @DeleteDate('columnName')
 */
import { onlyOnClasses } from '../../utils';
import { setMeta } from 'walas-meta-api';
export const DeleteDate = function(...params) {
    return function(target, key, descriptor) {
        onlyOnClasses(descriptor, 'DeleteDate');
        setMeta(target, 'class.generators.deleteDate', params[0]);
    };
}