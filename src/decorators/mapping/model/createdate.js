//usage: @CreateDate('columnName')

import { check } from '../../utils';
import { setMeta } from 'walas-meta-api';
export const CreateDate = function(...params) {
    return function(target, key, descriptor) {
        check.onlyOnClasses(descriptor, 'CreateDate');
        setMeta(target, 'class.generators.createDate', params[0]);
    };
}