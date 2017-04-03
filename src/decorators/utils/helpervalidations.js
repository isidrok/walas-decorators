// I dont like the fact that the message is not the last parameter
// of these functions, because this it has to be set to null if there is
// no need to define a custom message, but the ... notation requires that
// the argument it is used on is the last one
export const validateArgs = function (msg, ...args) {
    let errorMsg = msg || 'Argument does not exist';
    args.forEach(arg => {
        if (typeof arg != 'boolean' && !arg)
            throw new Error(errorMsg);
    });
}

export const validateSource = function (source, msg, ...validSources) {
    let errorMsg = msg || 'Invalid source';
    if (validSources.indexOf(source) === -1) throw new SyntaxError(errorMsg);
}