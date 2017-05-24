//usage: @SupressDelete()
import { check } from '../../utils';
import { setMeta } from 'walas-meta-api';
export const SupressDelete = function() {
    return function(target, key, descriptor) {
        check.onlyOnClasses(descriptor, 'SupressDelete');
        setMeta(target, 'class.generators.supressDelete', true);
    };
}