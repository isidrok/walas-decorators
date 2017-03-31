import { createMeta } from './createmeta';
export const setMeta = function (target, keys, value) {

    // if (!target) throw new Error('Target does not exist');
    // if (!keys) throw new Error('attr does not exist');
    // if (typeof value !== 'boolean' && !value) throw new Error('Invalid value');

    let meta = createMeta(target);
    keys = keys.split('.');
    keys.reduce((pre, cur, index) => {
        (index !== keys.length - 1) ? pre[cur] = (pre[cur] || {}) : pre[cur] = value;
        return pre[cur];
    }, meta);
}