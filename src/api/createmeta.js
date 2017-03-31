import { META } from './meta';
export const createMeta = function (target) {
    if (!target) throw new Error('Target does not exist');
    if (target.name) return target[META] = (target[META] || {});
    return target.constructor[META] = (target.constructor[META] || {});
}