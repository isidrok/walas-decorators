//usage: @entity({table:'CLIENT', provider:'mysql'}) class Client{...}
import { getSource } from '../utils';
import { setMeta } from 'walas-meta-api';
export const entity = function (...params) {
    return function (target,key,descriptor) {
        if(getSource(descriptor) != 'class')
            throw new SyntaxError('@entity can only be used on classes')
        setMeta(target, 'entity', params[0]);
    };
}

