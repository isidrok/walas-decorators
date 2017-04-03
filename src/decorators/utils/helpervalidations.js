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