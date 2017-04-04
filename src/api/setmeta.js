import { createMeta } from './createmeta';

export const setMeta = function (target, keys, value, inArray) {
    let meta = createMeta(target);
    keys = keys.split('.');
    keys.reduce((pre, cur, index) => {
        if (inArray) {
            if (index !== keys.length - 1) pre[cur] = (pre[cur] || {});
            else {
                pre[cur] = (pre[cur] || []);
                pre[cur].push(value);
            }
        }
        else
            (index !== keys.length - 1) ? pre[cur] = (pre[cur] || {}) : pre[cur] = value;
        return pre[cur];
    }, meta);
}
