import { getSource } from '../utils';

function onlyOnClasses(descriptor, decorator) {
    if (getSource(descriptor) != 'class')
        throw new SyntaxError(`@${decorator} can only be used on classes`);
}

function onlyOnMethods(descriptor, decorator) {
    if (getSource(descriptor) != 'method')
        throw new SyntaxError(`@${decorator} can only be used on methods`);
}

function onlyOnProperties(descriptor, decorator) {
    if (getSource(descriptor) != 'property')
        throw new SyntaxError(`@${decorator} can only be used on properties`);
}

function notOnClasses(descriptor, decorator) {
    if (getSource(descriptor) === 'class')
        throw new SyntaxError(`@${decorator} cannot be used on classes`);
}

function notOnMethods(descriptor, decorator) {
    if (getSource(descriptor) === 'method')
        throw new SyntaxError(`@${decorator} cannot be used on methods`);
}

function notOnProperties(descriptor, decorator) {
    if (getSource(descriptor) === 'property')
        throw new SyntaxError(`@${decorator} cannot be used on Properties`);
}

export const check = { onlyOnClasses, onlyOnMethods, onlyOnProperties, notOnClasses, notOnMethods, notOnProperties };