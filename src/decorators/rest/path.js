import { setMeta } from '../api';
import { getSource, validateArgs, validateSource } from '../utils';
export const path = function(...params) {
    return function(target, key, descriptor) {
        validateArgs(null,target);
        let source = getSource(descriptor);
        validateSource(source,'@path can only be used on classes','class')
        setMeta(target, 'path', params[0])
    };
}

