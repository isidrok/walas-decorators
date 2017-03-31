import { setMeta } from '../api';
import { getSource } from './helpersource';
export const path = function(...params) {
    return function(target, key, descriptor) {
        validateTarget(target);
        let source = getSource(descriptor);
        if (source != 'class') throw new SyntaxError('@path() can only bu used in classes')
        setMeta(target, `${path.name}`, params[0])
    };
}

function validateTarget(target) {
    if (!target) throw new SyntaxError('Target does not exist');
}