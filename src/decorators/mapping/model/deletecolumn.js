//usage: @DeleteColumn('columnName')
import { onlyOnClasses } from '../../utils';
import { setMeta } from '../../../api';
export const DeleteColumn = function(...params) {
    return function(target, key, descriptor) {
        onlyOnClasses(descriptor, 'DeleteColumn');
        setMeta(target, 'class.generators.deleteColumn', params[0]);
    };
}