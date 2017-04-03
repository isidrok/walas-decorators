//flags an attribute as ignored
import { setMeta } from 'walas-meta-api';
export const ignore = function () {
    return function (target, key) {
        //TODO: check if source === 'property'
        setMeta(target, `properties.${key}.ignore`, true);
    };
}