export const insertOnMethods = function(key, decorator) {
    return `methods.${key}.${decorator.name.toLowerCase()}`;
}