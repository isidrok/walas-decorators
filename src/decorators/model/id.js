//adds the key to the collection of ids of the class
import { setMeta } from 'walas-meta-api';
export const id = function () {
    return function (target, key) {
        //TODO: check if src === 'property'
        setMeta(target, `ids.${key}`, true);
    };
}