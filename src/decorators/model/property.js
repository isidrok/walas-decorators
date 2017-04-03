//contains different information for modelling the property
import { setMeta } from 'walas-meta-api';
export const property = function (...params) {
    return function (target, key) {
        //TODO: check if it is used on properties
        setMeta(target, `properties.${key}.property`, params[0]);
    };
}