//usage: @id() dni;
import { getSource } from '../utils';
import { setMeta } from 'walas-meta-api';
export const id = function () {
    return function (target, key, descriptor) {
        if (getSource(descriptor) != 'property')
            throw new SyntaxError('@id can only be used on properties')
        setMeta(target, `ids.${key}`, true);
    };
}