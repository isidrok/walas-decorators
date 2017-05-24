//usage: @Get('/:id?') searchClientById(id){...}
//or @get({url:'/:id?', params:['id','name']})
import { setMeta } from 'walas-meta-api';
import { check } from '../utils';
export const setVerbsMeta = function(target, key, descriptor, verb, params) {
    check.onlyOnMethods(descriptor, verb);
    let value = (typeof params[0] === 'object' ? params[0] : { url: params[0] });
    value.verb = verb;
    setMeta(target, `methods.${key}.${verb}`, value);
}