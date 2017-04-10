//usage: @Schema('schema')
/**
 * @export
 */
import { onlyOnClasses } from '../../utils';
import { setMeta } from '../../../api';
export const Schema = function(...params) {
    return function(target, key, descriptor) {
        onlyOnClasses(descriptor, 'Schema');
        setMeta(target, 'class.entity', params[0]);
    };
}