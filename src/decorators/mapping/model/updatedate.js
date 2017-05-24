//usage: @UpdateDate('columnName')
import { check } from '../../utils';
import { setMeta } from 'walas-meta-api';
export const UpdateDate = function(...params) {
    return function(target, key, descriptor) {
        check.onlyOnClasses(descriptor, 'UpdateDate');
        setMeta(target, 'class.generators.updateDate', params[0]);
    };
}