//usage: @ignore() password;
import { onlyOnProperties } from '../../utils';
import { setMeta } from 'walas-meta-api';
export const ignore = function () {
    return function (target, key, descriptor) {
        onlyOnProperties(descriptor, 'ignore');
        setMeta(target, `properties.${key}.ignore`, true);
    };
}