import { setMeta } from 'walas-meta-api';
import { getSource, validateArgs } from '../utils';

export const entity = function (...params) {
    return function (target, key, descriptor) {
        let source = getSource(descriptor);
            setMeta(target, 'entity', params);
    };
}

