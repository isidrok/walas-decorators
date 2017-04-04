//usage: @Ignore() password;
import { onlyOnProperties } from '../../utils';
import { setMeta } from '../../api';
export const Ignore = function() {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'Ignore');
        setMeta(target, `properties.${key}.Ignore`, true);
    };
}