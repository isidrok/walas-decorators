//usage: @Schema('schema')
import { check } from '../../utils';
import { setMeta } from 'walas-meta-api';
export const Schema = function(...params) {
    return function(target, key, descriptor) {
        check.onlyOnClasses(descriptor, 'Schema');
        setMeta(target, 'class.entity.schema', params[0]);
    };
}