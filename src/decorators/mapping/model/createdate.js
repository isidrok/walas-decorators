//usage: @CreateDate('columnName')
/**
 * @export
 */
import { onlyOnClasses } from '../../utils';
import { setMeta } from '../../../api';
export const CreateDate = function(...params) {
    return function(target, key, descriptor) {
        onlyOnClasses(descriptor, 'CreateDate');
        setMeta(target, 'class.generators.createDate', params[0]);
    };
}