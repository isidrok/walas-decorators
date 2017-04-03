//(name,[field,order}])
import { setMeta } from 'walas-meta-api';
export const index = function (...params) {
    return function (target) {
        //TODO: check if it is used on classes
        setMeta(target, `indexes.${params[0]}`, params[1]);
    };
}