import { setMeta } from '../api';
import { getSource } from './helpersource';

export const setVerbsMeta = function(target, key, descriptor, verb, params) {
    validateTarget(target);
    validateKey(key);
    let source = getSource(descriptor);
    if (source != 'method') throw new SyntaxError(`@${verb}() can only be used on methods`)
    setMeta(target, `methods.${key}.~${verb}`, params[0])
}

function validateTarget(target) {
    if (!target) throw new SyntaxError('Target does not exist');
}

function validateKey(key) {
    if (!key) throw new SyntaxError('Key does not exist');
}