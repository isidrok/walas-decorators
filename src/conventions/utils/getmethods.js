export const getMethods = function (entity) {
    return Object.entries(Object.getOwnPropertyDescriptors(entity.prototype))
        .filter(c => typeof c[1].value === 'function' && c[0] !== 'constructor')
        .map(c => ({ name: c[0], value: c[1].value }));
}