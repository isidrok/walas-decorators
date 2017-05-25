//usage: @UpdateDate('columnName')
/**
 * @export
 * @example: @UpdateDate('columnName')
 */
import { onlyOnClasses } from '../../utils';
import { setMeta } from '../../../api';
export const UpdateDate = function(...params) {
    return function(target, key, descriptor) {
        onlyOnClasses(descriptor, 'UpdateDate');
        setMeta(target, 'class.generators.updateDate', params[0]);
    };
}