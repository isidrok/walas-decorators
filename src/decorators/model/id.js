import { setMeta } from 'walas-meta-api';
import { getSource, validateArgs } from '../utils';

export const id = function (...params) {
    return function (target, key, descriptor) {
        let source = getSource(descriptor);
        setMeta(target, `properties.${key}.id`, true);
    };
}