//usage: @private() class Foo {...};
import { onlyOnClasses } from '../../utils';
import { setMeta } from '../../../api';
export const Private = function () {
    return function (target, key, descriptor) {
        onlyOnClasses(descriptor, 'ignore');
        setMeta(target, `class.private`, true);
    };
}