//usage: @required() phone;
import { setMeta } from 'walas-meta-api';
import { onlyOnProperties } from '../utils';

export const required = function(...params) {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'required');
        setMeta(target, `properties.${key}.required`, 'true');
    };
}