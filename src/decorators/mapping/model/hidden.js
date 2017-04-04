//usage: @private() class Foo {...};
import { onlyOnClasses } from '../../utils';
import { setMeta } from '../../../api';
export const hidden = function () {
    return function (target, key, descriptor) {
        onlyOnClasses(descriptor, 'ignore');
        setMeta(target, `class.private`, true);
    };
}