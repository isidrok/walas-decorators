import { META } from './meta';
export const getMeta = function (meta, keys) {
   
    keys = keys.split('.');
    if (keys[0] === META) return meta;
    return keys.reduce((pre, cur) => {
        if (!pre) return undefined;
        return pre[cur];
    }, meta);
}
