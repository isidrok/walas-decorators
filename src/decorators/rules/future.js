//usage: @Future() date;
import { setMeta } from 'walas-meta-api';
import { onlyOnProperties } from '../utils';

export const Future = function() {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'Future');
        setMeta(target, `properties.${key}.future`, 'true');
    };
}