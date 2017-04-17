//usage: @NotBlank() password;
import { setMeta } from 'walas-meta-api';
import { onlyOnProperties } from '../utils';

export const NotBlank = function() {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'NotBlank');
        setMeta(target, `properties.${key}.notBlank`, true);
    };
}