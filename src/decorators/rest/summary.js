import { setMeta } from '../api';
import { getSource } from './helpersource';
export const summary = function(...params) {
    return function(target, key, descriptor) {
        validateTarget(target);
        validateKey(key);
        let source = getSource(descriptor);
        if (source != 'method') throw new SyntaxError(`@summary() can only be used on methods`)
        setMeta(target, `$methods.${key}.summary`, params[0]);
    };
}

function validateTarget(target) {
    if (!target) throw new Error('Target does not exist');
}

function validateKey(key) {
    if (!key) throw new Error('Key does not exist');
}