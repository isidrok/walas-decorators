import { check } from '../../utils';
import { setMeta } from 'walas-meta-api';
export const Hidden = function() {
    return function(target, key, descriptor) {
        check.onlyOnClasses(descriptor, 'Hidden');
        setMeta(target, 'class.hidden', true);
    };
}