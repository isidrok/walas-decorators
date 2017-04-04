//usage: @queryable(Bar) class Foo {...};
import { onlyOnClasses } from '../../utils';
import { setMeta } from '../../api';
export const queryable = function (...params) {
    return function (target, key, descriptor) {
        onlyOnClasses(descriptor, 'queryable');
        setMeta(target, `class.queryable`, [target].concat(params));
    };
}