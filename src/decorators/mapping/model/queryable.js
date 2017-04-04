//usage: @Queryable(Bar) class Foo {...};
import { onlyOnClasses } from '../../utils';
import { setMeta } from '../../api';
export const Queryable = function(...params) {
    return function(target, key, descriptor) {
        onlyOnClasses(descriptor, 'Queryable');
        setMeta(target, `class.queryable`, [target].concat(params));
    };
}