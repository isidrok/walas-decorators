//usage: @Queryable(Bar) class Foo {...};
import { onlyOnClasses } from '../../utils';
import { setMeta } from 'walas-meta-api';
export const Queryable = function(...params) {
    return function(target, key, descriptor) {
        onlyOnClasses(descriptor, 'Queryable');
        setMeta(target, `class.queryable`, [target.name].concat(params));
    };
}