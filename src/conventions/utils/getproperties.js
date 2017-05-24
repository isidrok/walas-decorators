export const getProperties = function (entity) {
    return Object.entries(Object.getOwnPropertyDescriptors(entity.prototype))
        .filter(c => typeof c[1].value !== 'function')
        .map(c => c[0]);
}