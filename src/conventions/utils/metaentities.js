import { META } from '../../api'
export const getMetaEntities = function (dbContext) {
    let instance = new dbContext();
    return Object.entries(Object.getOwnPropertyDescriptors(dbContext.prototype))
        .filter(c => typeof c[1].value !== 'function')
        .map(c => ({ id: c[0], meta: instance[c[0]]._entity.constructor[META] || {} }))
        .reduce((pre, cur) => {
            pre[cur.id] = Object.assign({}, cur.meta);
            return pre;
        }, {});
}
