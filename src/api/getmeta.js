import { META } from './meta';
import { createMeta } from './createmeta';
export const getMeta = function (target, keys) {

    validateTarget();
    validateAttr();
    let meta = createMeta(target);
    if (keys[0] === META) return meta;
    keys = keys.split('.');
    return keys.reduce((pre, cur) => {
        if (!pre[cur]) throw new Error('invalid meta attribute');
        return pre[cur];
    }, meta);

}

function validateTarget(target) {
    if (!target) throw new Error('Target does not exist');
}

function validateAttr(attr) {
    if (attr) throw new Error('Attr does not exist');
}