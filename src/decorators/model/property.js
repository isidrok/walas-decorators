import { setMeta } from 'walas-meta-api';
import { getSource, validateArgs } from '../utils';

export const property = function (...params) {
    return function (target, key, descriptor) {
        let source = getSource(descriptor);
        setMeta(target, `properties.${key}.property`, params);
    };
}