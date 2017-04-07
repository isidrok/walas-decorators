//usage: @Hidden()
import { onlyOnClasses } from '../../utils';
import { setMeta } from '../../../api';
export const Hidden = function(...params) {
    return function(target, key, descriptor) {
        onlyOnClasses(descriptor, 'Hidden');
        setMeta(target, 'class.hidden', true);
    };
}