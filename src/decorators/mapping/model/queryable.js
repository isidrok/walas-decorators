//usage: @queryable(Bar) class Foo {...};
import { onlyOnClasses } from '../../utils';
import { setMeta } from 'walas-meta-api';
export const queryable = function (...params) {
    return function (target, key, descriptor) {
        onlyOnClasses(descriptor, 'queryable');
        let value = params ? params.concat(target) : [target];
        setMeta(target, `class.queryable`, value);
    };
}