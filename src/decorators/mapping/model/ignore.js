//usage: @Ignore() password;
import { onlyOnProperties } from '../../utils';
import { setMeta } from 'walas-meta-api';
export const Ignore = function() {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'Ignore');
        //Properties + methods?
        setMeta(target, `properties.${key}.ignore`, true);
    };
}