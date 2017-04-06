import { META } from './meta';
export const getMeta = function (meta, keys) {

    if (keys[0] === META) return meta;
    keys = keys.split('.');
    return keys.reduce((pre, cur) => {
        if (!pre) return undefined;
        return pre[cur];
    }, meta);
}
