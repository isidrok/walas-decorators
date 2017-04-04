//usage: @id() dni;
//or: @id(id1,id2) class Client {...}
import { notOnMethods } from '../../utils';
import { setMeta } from '../../api';
export const Id = function (...params) {
    return function (target, key, descriptor) {
        notOnMethods(descriptor, 'id');
        let values = params.length > 0? params : [key];
        values.forEach(value =>{
            setMeta(target, `class.ids`, value, true);
        });
    };
}