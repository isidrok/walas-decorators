//usage: @DeleteDate('columnName')
import { check } from '../../utils';
import { setMeta } from 'walas-meta-api';
export const DeleteDate = function(...params) {
    return function(target, key, descriptor) {
        check.onlyOnClasses(descriptor, 'DeleteDate');
        setMeta(target, 'class.generators.deleteDate', params[0]);
    };
}