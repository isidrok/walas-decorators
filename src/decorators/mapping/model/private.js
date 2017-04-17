//usage: @private() class Foo {...};
import { onlyOnClasses } from '../../utils';
import { setMeta } from 'walas-meta-api';
export const Private = function () {
    return function (target, key, descriptor) {
        onlyOnClasses(descriptor, 'Private');
        setMeta(target, `class.private`, true);
    };
}