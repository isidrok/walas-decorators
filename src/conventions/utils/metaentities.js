import { META } from '../../api'
export const getMetaEntities = function (dbContext) {
    let instance = new dbContext();
    return Object.entries(Object.getOwnPropertyDescriptors(dbContext.prototype))
        .filter(c => typeof c[1].value !== 'function')
        .map(c => ({ 'entity': instance[c[0]]._entity, 'meta': instance[c[0]]._entity[META] || {} }))
        .map(c => ({ 'entity': c.entity, 'meta': Object.assign({}, c.meta)}));
}
