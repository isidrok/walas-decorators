//usage: @DeleteDate('columnName')
import { onlyOnClasses } from '../../utils';
import { setMeta } from '../../../api';
export const DeleteDate = function(...params) {
    return function(target, key, descriptor) {
        onlyOnClasses(descriptor, 'DeleteDate');
        setMeta(target, 'class.generators.deleteDate', params[0]);
    };
}