//usage: @Past() date;
import { setMeta } from 'walas-meta-api';
import { onlyOnProperties } from '../utils';

export const Past = function() {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'Past');
        setMeta(target, `properties.${key}.past`, true);
    };
}