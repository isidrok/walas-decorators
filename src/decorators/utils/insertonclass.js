export const insertOnClass = function(decorator) {
    return `class.${decorator.name.toLowerCase()}`;
}