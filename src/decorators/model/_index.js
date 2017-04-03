//usage: @index(index1, {field: _field, order: _order}, indexN, {field: _field, order: _order}) class Client{...}
import { getSource } from '../utils';
import { setMeta } from 'walas-meta-api';
export const index = function (...params) {
    return function (target, key, descriptor) {
        if (!getSource(descriptor) != 'class')
            throw new SyntaxError('@index can only be used on classes');
        if (params.length % 2 === 1)
            throw new SyntaxError('Even number of parameters expected');
        for (let i = 0; i < params.length; i += 2)
            setMeta(target, `indexes.${params[i]}`, params[i + 1]);
    };
}