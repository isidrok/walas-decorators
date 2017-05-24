//usage: @id() dni;
//or: @id(id1,id2) class Client {...}
import { check, getSource } from '../../utils';
import { setMeta } from 'walas-meta-api';
export const Id = function (...params) {
    return function (target, key, descriptor) {
        let source = getSource(descriptor);
        let route = (source === 'class' ? 'class.ids' : `properties.${key}.id`);
        let value = (source === 'class' ? params : true);
        check.notOnMethods(descriptor, 'id');
        setMeta(target, route, value);
    };
}