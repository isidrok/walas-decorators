//usage: @SupressGet()
import { check } from '../../utils';
import { setMeta } from 'walas-meta-api';
export const SupressGet = function() {
    return function(target, key, descriptor) {
        check.onlyOnClasses(descriptor, 'SupressGet');
        setMeta(target, 'class.generators.supressGet', true);
    };
}