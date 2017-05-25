//usage: @Param('id') searchClientById(id){...}
import { setMeta } from '../api';
import { onlyOnMethods } from '../utils';
export const Param = function(...params) {
    return function(target, key, descriptor) {
        onlyOnMethods(descriptor, 'Param');
        let paramName = Object.keys(params[0])[0];
        setMeta(target, `methods.${key}.params.${paramName}`, params[0][paramName]);
    };
}