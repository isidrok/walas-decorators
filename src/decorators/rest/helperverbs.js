//usage: @Get('/:id?') searchClientById(id){...}
import { setMeta } from 'walas-meta-api';
import { onlyOnMethods } from '../utils';
export const setVerbsMeta = function(target, key, descriptor, verb, params) {
    onlyOnMethods(descriptor, verb);
    let value = typeof params[0] === 'object' ? params[0] : { url: params[0] };
    value.verb = verb;
    setMeta(target, `methods.${key}.${verb}`, value);
}