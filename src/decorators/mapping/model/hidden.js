//usage: @Hidden()
/**
 * @export
 * @example @Hidden()
 */
import { onlyOnClasses } from '../../utils';
import { setMeta } from 'walas-meta-api';
export const Hidden = function(...params) {
    return function(target, key, descriptor) {
        onlyOnClasses(descriptor, 'Hidden');
        setMeta(target, 'class.hidden', true);
    };
}