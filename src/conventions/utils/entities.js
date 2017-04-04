import {META} from '../../api'
export const getEntities = function (dbContext, instance) {
    return Object.entries(Object.getOwnPropertyDescriptors(dbContext.prototype))
        .filter(c => c[0] !== 'constructor' && typeof c[1].value !== 'function')
        .map(c => ({ id: c[0], meta: instance[c[0]]._entity.constructor[META] || {} }));
}