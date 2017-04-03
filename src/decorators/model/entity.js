//contains different information for modelling the entity 
import { setMeta } from 'walas-meta-api';
export const entity = function (...params) {
    return function (target) {
        //TODO: check if src === 'class'
        setMeta(target, 'entity', params[0]);
    };
}

