import { setMeta } from 'walas-meta-api';
import { getSource } from '../utils';

export const rules = function(...params) {
    return function(target, key, descriptor) {
        let source = getSource(descriptor);
        setMeta(target, `properties.${key}.rules`, params);
    };
}