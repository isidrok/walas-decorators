import { getSource } from '../utils';

export const onlyOnClasses = function (descriptor, decorator) {
    if (getSource(descriptor) != 'class')
        throw new SyntaxError(`@${decorator} can only be used on classes`);
}

export const onlyOnMethods = function (descriptor, decorator) {
    if (getSource(descriptor) != 'method')
        throw new SyntaxError(`@${decorator} can only be used on methods`);
}

export const onlyOnProperties = function (descriptor, decorator) {
    if (getSource(descriptor) != 'property')
        throw new SyntaxError(`@${decorator} can only be used on properties`);
}

export const notOnMethods = function (descriptor, decorator) {
    if (getSource(descriptor) === 'method')
        throw new SyntaxError(`@${decorator} cannot be used on methods`);
}