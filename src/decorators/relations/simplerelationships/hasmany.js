import { setMeta } from 'walas-meta-api';
import { getSource, validateArgs } from '../utils';

export const hasMany = function (...params) {
    return function (target, key, descriptor) {
        let source = getSource(descriptor);
        setMeta(target, `properties.${key}.hasMany`, params[0]);
    };
}