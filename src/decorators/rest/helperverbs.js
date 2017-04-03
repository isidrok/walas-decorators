import { setMeta } from 'walas-meta-api';
import { getSource, validateArgs, validateSource } from '../utils';

export const setVerbsMeta = function(target, key, descriptor, verb, params) {
    validateArgs(null, target, key, descriptor, verb, params);
    let source = getSource(descriptor);
    validateSource(source, `@${verb} can only be used on methods`, 'method');
    setMeta(target, `methods.${key}.${verb}`, params[0])
}