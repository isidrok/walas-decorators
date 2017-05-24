//usage: @private() class Foo {...};
import { check } from '../../utils';
import { setMeta } from 'walas-meta-api';
export const Private = function () {
    return function (target, key, descriptor) {
        check.onlyOnClasses(descriptor, 'Private');
        setMeta(target, `class.private`, true);
    };
}