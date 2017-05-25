//usage: @Required() phone;
import { setMeta } from 'walas-meta-api';
import { onlyOnProperties } from '../utils';

export const Required = function() {
    return function(target, key, descriptor) {
        onlyOnProperties(descriptor, 'Required');
        setMeta(target, `properties.${key}.required`, true);
    };
}