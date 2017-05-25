//usage: @Schema('schema')
/**
 * @export
 * @example @Schema('schema')
 */
import { onlyOnClasses } from '../../utils';
import { setMeta } from 'walas-meta-api';
export const Schema = function(...params) {
    return function(target, key, descriptor) {
        onlyOnClasses(descriptor, 'Schema');
        setMeta(target, 'class.entity', params[0]);
    };
}