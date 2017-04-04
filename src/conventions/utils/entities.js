import { META } from '../../api'
export const getEntities = function (dbContext, instance) {
    let entities = Object.entries(Object.getOwnPropertyDescriptors(dbContext.prototype))
        .filter(c => typeof c[1].value !== 'function')
        .map(c => ({ id: c[0], meta: instance[c[0]]._entity.constructor[META] || {} }));
    return parseEntities(entities);
}

function parseEntities(entities) {
    let obj = {};
    entities.forEach(entity => {
        obj[entity.id] = Object.assign({},entity.meta);
    });
    return obj;
}