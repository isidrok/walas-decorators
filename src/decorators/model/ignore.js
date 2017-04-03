//usage: @ignore() password;
import { getSource } from '../utils';
import { setMeta } from 'walas-meta-api';
export const ignore = function () {
    return function (target, key, descriptor) {
        if (getSource(descriptor) != 'property')
            throw new SyntaxError('@ignore can only be used on properties')
        setMeta(target, `properties.${key}.ignore`, true);
    };
}