export const insertOnProperties = function(key, decorator) {
    return `properties.${key}.${decorator.name.toLowerCase()}`;
}