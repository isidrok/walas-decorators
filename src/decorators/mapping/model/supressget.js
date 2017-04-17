//usage: @SupressGet()
/**
 * @export
 * @example @SupressGet()
 */
import { onlyOnClasses } from '../../utils';
import { setMeta } from 'walas-meta-api';
export const SupressGet = function(...params) {
    return function(target, key, descriptor) {
        onlyOnClasses(descriptor, 'SupressGet');
        setMeta(target, 'class.generators.supressGet', true);
    };
}