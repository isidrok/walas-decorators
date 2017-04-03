//recibe una entidad, factura hasOne(client)
import { setMeta } from 'walas-meta-api';
import { getSource, validateArgs } from '../utils';

export const hasOne = function (...params) {
    return function (target, key, descriptor) {
        let source = getSource(descriptor);
        setMeta(target, `properties.${key}.hasOne`, params[0]);
    };
}