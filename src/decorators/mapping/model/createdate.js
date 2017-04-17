//usage: @CreateDate('columnName')
/**
 * @export
 * @example @CreateDate('columnName')
 */
import { onlyOnClasses } from '../../utils';
import { setMeta } from 'walas-meta-api';
export const CreateDate = function(...params) {
    return function(target, key, descriptor) {
        onlyOnClasses(descriptor, 'CreateDate');
        setMeta(target, 'class.generators.createDate', params[0]);
    };
}