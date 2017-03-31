export const getSource = function(descriptor) {
    if (!descriptor) return 'class';
    if (descriptor.value && typeof descriptor.value === 'function') return 'method';
    return 'property';
}