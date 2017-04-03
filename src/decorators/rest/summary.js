import { setMeta } from 'walas-meta-api';
import { getSource } from '../utils';
export const summary = function(...params) {
    return function(target, key, descriptor) {
        
        let source = getSource(descriptor);
        if (source != 'method') throw new SyntaxError(`@summary() can only be used on methods`)
        setMeta(target, `$methods.${key}.summary`, params[0]);
    };
}
