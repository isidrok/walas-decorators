//usage: @Description('Clients model for our system) class Client{...}
//or: @Description('search client by dni') searchClientByDni(dni){...}
//or: @Description('dni of the client') dni;
import { setMeta } from 'walas-meta-api';
import { getSource } from '../utils';
export const Description = function(...params) {
    return function(target, key, descriptor) {
        let source = getSource(descriptor);
        let container = (source === 'method' ? 'methods' : 'properties');
        let keys = source === 'class' ? 'class.description' : `${container}.${key}.description`;
        setMeta(target, keys, params[0]);
    }
};