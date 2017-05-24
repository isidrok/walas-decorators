//usage: @DeleteColumn('columnName')
import { check } from '../../utils';
import { setMeta } from 'walas-meta-api';
export const DeleteColumn = function(...params) {
    return function(target, key, descriptor) {
        check.onlyOnClasses(descriptor, 'DeleteColumn');
        setMeta(target, 'class.generators.deleteColumn', params[0]);
    };
}